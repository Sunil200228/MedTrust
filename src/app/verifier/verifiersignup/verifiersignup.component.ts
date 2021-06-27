import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-verifiersignup',
  templateUrl: './verifiersignup.component.html',
  styleUrls: ['./verifiersignup.component.css']
})
export class VerifiersignupComponent implements OnInit {

  public userName !: string;
  public userPassword !: string;

  constructor(private _router : Router, private _userService : UserService) { }

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
          localStorage.setItem('verifierDid', res.did);
          this._router.navigate(["/verifier/dashboard"]);
      }
    }, err=>{
      console.log(err);
    });
  }
}
