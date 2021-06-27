import { Component, OnInit } from '@angular/core';
import { CredentialService } from 'src/app/credential.service';

@Component({
  selector: 'app-verifiertable',
  templateUrl: './verifiertable.component.html',
  styleUrls: ['./verifiertable.component.css']
})
export class VerifiertableComponent implements OnInit {
  public meds!: any;
  constructor(private _credService: CredentialService) { }

  ngOnInit(): void {
    this._credService.getallMeds().subscribe(res=>{
      this.meds = res;
      console.log(res);
    }, err=>{
      console.log(err);
    });
  }


}
