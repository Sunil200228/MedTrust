import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-verifierlogin',
  templateUrl: './verifierlogin.component.html',
  styleUrls: ['./verifierlogin.component.css']
})
export class VerifierloginComponent implements OnInit {

  public userName !: string;
  public userPassword !: string;

  constructor(private _router : Router, private _userService : UserService) { }

  ngOnInit(): void {
  }

  onLogin(){
    const userInfo = {
      username : this.userName,
      password : this.userPassword
    };
    this._userService.loginUser(userInfo).subscribe(res=>{
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
