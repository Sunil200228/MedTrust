import { Component, OnInit } from '@angular/core';
import { CredentialService } from 'src/app/credential.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holder-table-page',
  templateUrl: './holder-table-page.component.html',
  styleUrls: ['./holder-table-page.component.css']
})
export class HolderTablePageComponent implements OnInit {
  public vcdata !: any;
  constructor(private _router : Router, private _credService : CredentialService) { }

  ngOnInit(): void {
    this._credService.getallVC().subscribe(res =>{
      this.vcdata = res;
      console.log(this.vcdata);
    }, err=>{
      console.log(err);
    });
  }

  getallVC(): void {
    this._credService.getallVC().subscribe(res =>{
      this.vcdata = res;
      console.log(this.vcdata);
    }, err=>{
      console.log(err);
    });
  }

}
