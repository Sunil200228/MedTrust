import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
    selector: 'app-holder-login',
    templateUrl: './holder-login.component.html',
    styleUrls: ['./holder-login.component.css'],
})
export class HolderLoginComponent implements OnInit {
    
    public userName !: string;
    public userPassword !: string;

    constructor(private _router : Router, private _userService : UserService) {}

    ngOnInit(): void {}

    onSignIn() {
        const signInInfo = {
            username : this.userName,
            password : this.userPassword
        };
        this._userService.loginUser(siginInfo).subscribe(res=>{
            console.log(res);
            if(res.accessToken != undefined){
                localStorage.setItem('accessToken', res.accessToken);
                localStorage.setItem('holderDid', res.did);
                this._router.navigate(["/holder/dashboard"]);
            }
        }, err=>{
            console.log(err);
        });
    }
}
