import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(private _http: HttpClient) { }
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Api-Key', '265d6e337001dfbd73a634459c0ab47dea1ed69c2eb4a323fbadd7f7c62fa4c7'); //MedTrust Data API Hash Key

  addMed(data:any){
    return this._http.post<{message: any}>('http://localhost:3000/new', data);
  }

  getallMeds(){
    return this._http.get('http://localhost:3000/fetchAll');
  }

  changeMed(medId: any){
    return this._http.get('http://localhost:3000/update/'+medId);
  }

  // type, data, holderDid => vc
  buildUnsignedVC(vc:any){
    return this._http.post<{unsignedVC: any}>('https://affinity-issuer.prod.affinity-project.org/api/v1/vc/build-unsigned', vc, {headers: this.headers});
  }

  signVC(unsignedvc:any){
    let accessToken = localStorage.getItem('accessToken') || '';
    let signingheaders = new HttpHeaders()
    .set('Authorization', accessToken);
    .set('Api-Key', '265d6e337001dfbd73a634459c0ab47dea1ed69c2eb4a323fbadd7f7c62fa4c7');  
    return this._http.post<{signedCredential: any}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/wallet/sign-credential', unsignedvc, {headers: signingheaders});
  }

  shareVC(credId:any){
    let ttld = {
      ttl : 0 
    };
    let accessToken = localStorage.getItem('accessToken') || '';
    let signingheaders = new HttpHeaders()
    .set('Authorization', accessToken);
    .set('Api-Key', '265d6e337001dfbd73a634459c0ab47dea1ed69c2eb4a323fbadd7f7c62fa4c7');
    return this._http.post<{qrCode: any, sharingUrl:any}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/wallet/credentials/'+ credId +'/share', ttld, {headers: signingheaders});
  }

  storeVC(data:any){
    let accessToken = localStorage.getItem('accessToken') || '';
    let signingheaders = new HttpHeaders()
    .set('Authorization', accessToken);
    .set('Api-Key', '265d6e337001dfbd73a634459c0ab47dea1ed69c2eb4a323fbadd7f7c62fa4c7');
    return this._http.post<{credentialsIds: any}>('https://cloud-wallet-api.prod.affinity-project.org/api/v1/wallet/credentials', data, {headers: signingheaders});
  }

  getallVC(){
    let accessToken = localStorage.getItem('accessToken') || '';
    let signingheaders = new HttpHeaders()
    .set('Authorization', accessToken);
    .set('Api-Key', '265d6e337001dfbd73a634459c0ab47dea1ed69c2eb4a323fbadd7f7c62fa4c7');
    return this._http.get('https://cloud-wallet-api.prod.affinity-project.org/api/v1/wallet/credentials', {headers: signingheaders});

  }

  verifyVC(signedvc:any){
    return this._http.post<{errors: any, isValid: any}>('https://affinity-verifier.prod.affinity-project.org/api/v1/verifier/verify-vcs', signedvc, {headers: this.headers});
  }
}
