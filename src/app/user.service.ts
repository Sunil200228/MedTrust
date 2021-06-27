import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: HttpClient) { }
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Api-Key', '265d6e337001dfbd73a634459c0ab47dea1ed69c2eb4a323fbadd7f7c62fa4c7'); //MedTrust Data API Hash Key

  signupUser(user:any){
    return this._http.post<{accessToken: any, did: any}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/signup', user);
  }

  loginUser(user:any){
    return this._http.post<{accessToken: any, did: any}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/login', user);
  }

  //204
  logoutUser(){
    return this._http.post<{}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/logout', { headers: this.headers })
  }
}
