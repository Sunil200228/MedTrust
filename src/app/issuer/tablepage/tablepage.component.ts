import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CredentialService} from 'src/app/credential.service';

@Component({
  selector: 'app-tablepage',
  templateUrl: './tablepage.component.html',
  styleUrls: ['./tablepage.component.css']
})
export class TablepageComponent implements OnInit {

  public name !: string;
  public mrp !: string;
  public companyName !: string;
  public mfg !: string;
  public expire !: string;
  public batchno !: string;
  public message !: string;
  constructor(private _router : Router, private _credService : CredentialService) { }

  ngOnInit(){

  }

  onSubmit(){

    let date:any = new Date();
    date = date.toISOString().slice(0,10);
    let usern:any = localStorage.getItem('username');
    let did:any = localStorage.getItem('did');
    let id:any = '_' + Math.random().toString(36).substr(2, 9);
    let postData:any = {
      medicineId: id,
      approved: false,
      payload: {
        holderDid: did,
        medicineName: this.name,
        mrp: this.mrp,
        companyName: this.companyName,
        mfgDate: this.mfg,
        expDate: this.expire,
        batch: this.batchno,
        issueDate: date
      },
      username: usern
    };

    this._credService.addMed(postData).subscribe(res => {
      console.log(res.message);
      this.message = res.message;
    }, err => {
      console.log(err);
    });
  }
}
/*
 Admin...
    let ubvc = {
        type: "IDDocumentCredentialPersonV1",
        data: {
          medicineName: this.name,
          mrp: this.mrp,
          companyName: this.companyName,
          mfgDate: this.mfg,
          expDate: this.expire,
          batch: this.batchno
          issueDate: date          
        },
        holderDid: postData.payload.holderDid
    }
    let uvcresp;
    this._credService.buildUnsignedVC(ubvc).subcribe(res=>{
      uvcresp = res;
      console.log(res);
    }, error=>{
      console.log(error);
    });
    let svc;
    this._credService.signVC(uvcresp.unsignedCredential).subscribe(res=>{
      svc = res.signedCredential;
      console.log(res);
    }, err=>{
      console.log(err);
    });

    let storevcdata = {
      data: [ 
        svc
      ]
    }
    let credIds;
    this._credService.storeVC(storevcdata).subscribe(res=>{
      console.log(res);
      credIds = res.credentialIds;
    }, err=>{
      console.log(err);
    });
    let dispmsg;
    this._credService.shareVC(credIds[0]).subscribe(res=>{
      dispmsg = res; //qrCode and sharingUrl
      console.log(res);
    }, err=>{
      console.log(err);
    })
*/

