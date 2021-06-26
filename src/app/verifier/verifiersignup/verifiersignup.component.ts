import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifiersignup',
  templateUrl: './verifiersignup.component.html',
  styleUrls: ['./verifiersignup.component.css']
})
export class VerifiersignupComponent implements OnInit {

  public userName !: string;
  public userPassword !: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSignUp(){
    const userInfo = {
      username : this.userName,
      password : this.userPassword
    };
    console.log(userInfo);
    
  }
}
