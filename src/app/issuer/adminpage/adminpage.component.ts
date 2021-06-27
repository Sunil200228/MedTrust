import { Component, OnInit } from '@angular/core';
import { CredentialService } from 'src/app/credential.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

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
}
}
