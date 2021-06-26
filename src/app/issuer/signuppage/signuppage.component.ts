import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  public userEmail !: string;
  public userPassword !: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSignUp(){
    const userInfo = {
      username : this.userEmail,
      password : this.userPassword
    };
    console.log(userInfo);
    
  }
}
