import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolderLoginComponent } from './holder/holder-login/holder-login.component';
import { HolderTablePageComponent } from './holder/holder-table-page/holder-table-page.component';
import { HoldersignupComponent } from './holder/holdersignup/holdersignup.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './issuer/loginpage/loginpage.component';
import { SignuppageComponent } from './issuer/signuppage/signuppage.component';
import { TablepageComponent } from './issuer/tablepage/tablepage.component';
import { VerifierloginComponent } from './verifier/verifierlogin/verifierlogin.component';
import { VerifiersignupComponent } from './verifier/verifiersignup/verifiersignup.component';
import { VerifiertableComponent } from './verifier/verifiertable/verifiertable.component';
import { SharecredspageComponent} from './verifier/sharecredspage/sharecredspage.component';
import {AdminpageComponent} from './issuer/adminpage/adminpage.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"holder/login",component:HolderLoginComponent},
  {path:"holder/signup",component:HoldersignupComponent},
  {path:"holder/dashboard",component:HolderTablePageComponent},
  {path:"issuer/login",component:LoginpageComponent},
  {path:"issuer/signup",component:SignuppageComponent},
  {path:"issuer/dashboard",component:TablepageComponent},
  {path:"verifier/login",component:VerifierloginComponent},
  {path:"verifier/signup",component:VerifiersignupComponent},
  {path:"verifier/dashboard",component:VerifiertableComponent},
  {path:"issuer/admin", component:AdminpageComponent},
  {path:"verifier/sharecreds", component:SharecredspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
