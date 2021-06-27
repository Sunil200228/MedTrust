import { Component, OnInit } from '@angular/core';
import { CredentialService } from 'src/app/credential.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  public dispmsg !: any;
  public credIds !: any;
  public uvcresp !: any;
  public ubvc !: any;
  public svc !:any;
  
  constructor(private _credService : CredentialService) { }
  public meds:any = {};
  ngOnInit(): void {
    this._credService.getallMeds().subscribe(res=>{
      this.meds = res;
      console.log(res);
    }, err=>{
      console.log(err);
    });
  }

  
  onApprove(medId: any){
    this._credService.changeMed(medId).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    });
    let appdid = localStorage.getItem('did') || '';
    this.ubvc = {
      type: "IDDocumentCredentialPersonV1",
      data: {
        medicineName: "Aspirin",
        mrp: "Rs 550",
        companyName: "Mankind",
        mfgDate: "27-05-2021",
        expDate: "28-09-2022",
        batch: "61728",
        issueDate: "27-06-2021"          
      },
      holderDid: appdid
  }

  this._credService.buildUnsignedVC(this.ubvc).subscribe(res=>{
    this.uvcresp = res;
    console.log(res);
  }, error=>{
    console.log(error);
  });

  this._credService.signVC(this.uvcresp.unsignedCredential).subscribe(res=>{
    this.svc = res.signedCredential;
    console.log(res);
  }, err=>{
    console.log(err);
  });

  let storevcdata = {
    data: [ 
      this.svc
    ]
  }
  
  this._credService.storeVC(storevcdata).subscribe(res=>{
    console.log(res);
    this.credIds = res.credentialIds;
  }, err=>{
    console.log(err);
  });
  this._credService.shareVC(this.credIds[0]).subscribe(res=>{
    this.dispmsg = res; //qrCode and sharingUrl
    console.log(res);
  }, err=>{
    console.log(err);
  })
  }
}
