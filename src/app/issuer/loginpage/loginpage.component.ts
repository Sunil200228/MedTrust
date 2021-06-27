import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public userEmail !: string;
  public userPassword !: string;

  constructor(private _router : Router, private _userService : UserService) {}

  ngOnInit(): void {
  }

  onLogin(){
    const userInfo = {
      username : this.userEmail,
      password : this.userPassword
    };
    this._userService.loginUser(userInfo).subscribe(res=>{
      console.log(res);
      if(res.accessToken != undefined){
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('issuerDid', res.did);
          localStorage.setItem('username', this.userEmail);
          this._router.navigate(["/issuer/dashboard"]);
      }
    }, err=>{
      console.log(err);
    });
  }
}
