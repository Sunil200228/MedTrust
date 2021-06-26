import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public userEmail !: string;
  public userPassword !: string;

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    const userInfo = {
      username : this.userEmail,
      password : this.userPassword
    };
    console.log(userInfo);
    this._router.navigate(["/issuer/dashboard"]);
  }
}
