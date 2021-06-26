import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holdersignup',
  templateUrl: './holdersignup.component.html',
  styleUrls: ['./holdersignup.component.css']
})
export class HoldersignupComponent implements OnInit {
  
  public userName !: string;
  public userPassword !: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSignUp(){
    console.log("heeloo");
    
    const userInfo = {
      username : this.userName,
      password : this.userPassword
    };
    console.log(userInfo);
    
  }
}
