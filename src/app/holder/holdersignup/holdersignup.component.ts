import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holdersignup',
  templateUrl: './holdersignup.component.html',
  styleUrls: ['./holdersignup.component.css']
})
export class HoldersignupComponent implements OnInit {
  
  public userName !: string;
  public userPassword !: string;
  
  constructor(private _router : Router, private _userService : UserService) {}

  ngOnInit(): void {
  }

  onSignUp(){    
    const userInfo = {
      username : this.userName,
      password : this.userPassword
    };
    this._userService.signupUser(userInfo).subscribe(res=>{
      console.log(res);
      if(res.accessToken != undefined){
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('holderDid', res.did);
          this._router.navigate(["/holder/dashboard"]);
      }
    }, err=>{
      console.log(err);
    });
    
  }
}
