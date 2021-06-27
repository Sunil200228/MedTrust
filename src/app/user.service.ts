import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: HttpClient) { }
  public headers:any = new HttpHeaders().set('content-type', 'application/json').set('Api-Key', '265d6e337001dfbd73a634459c0ab47dea1ed69c2eb4a323fbadd7f7c62fa4c7'); //MedTrust Data API Hash Key

  signupUser(user:any){
    return this._http.post<{accessToken: any, did: any}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/signup', user, {headers: this.headers});
  };

  loginUser(user:any){
    return this._http.post<{accessToken: any, did: any}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/login', user, {headers: this.headers});
  };

  //204
  logoutUser(){
    let accessToken = localStorage.getItem('accessToken') || '';
    let logoutheaders:any = new HttpHeaders().set('content-type', 'application/json').set('Api-Key', '265d6e337001dfbd73a634459c0ab47dea1ed69c2eb4a323fbadd7f7c62fa4c7').set('Authorization', accessToken); //MedTrust Data API Hash Key
    return this._http.post<{}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/logout', { headers: logoutheaders });
  };
}
