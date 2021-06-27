import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  public userEmail !: string;
  public userPassword !: string;

  constructor(private _router : Router, private _userService : UserService) {}

  ngOnInit(): void {
  }

  onSignUp(){
    const userInfo = {
      username : this.userEmail,
      password : this.userPassword
    };
    this._userService.signupUser(userInfo).subscribe(res=>{
      console.log(res);
      if(res.accessToken != undefined){
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('issuerDid', res.did);
          this._router.navigate(["/issuer/dashboard"]);
      }
    }, err=>{
      console.log(err);
    });
  }
}
