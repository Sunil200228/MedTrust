import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-holder-login',
    templateUrl: './holder-login.component.html',
    styleUrls: ['./holder-login.component.css'],
})
export class HolderLoginComponent implements OnInit {
    
    public userName !: string;
    public userPassword !: string;

    constructor(private _router : Router) {}

    ngOnInit(): void {}

    onSignIn() {
        const signInInfo = {
            username : this.userName,
            password : this.userPassword
        };
        console.log(signInInfo);
        this._router.navigate(["/holder/dashboard"]);
    }
}
