import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifierlogin',
  templateUrl: './verifierlogin.component.html',
  styleUrls: ['./verifierlogin.component.css']
})
export class VerifierloginComponent implements OnInit {

  public userName !: string;
  public userPassword !: string;

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    const userInfo = {
      username : this.userName,
      password : this.userPassword
    };
    console.log(userInfo);
    this._router.navigate(["/verifier/dashboard"]);
  }
}
