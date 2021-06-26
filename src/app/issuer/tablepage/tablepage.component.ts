import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const medicine = {
      medicineName : this.name,
      mrp : this.mrp,
      comapanyName : this.companyName,
      mfgDate : this.mfg,
      expDate : this.expire,
      batch : this.batchno
    }

    console.log(medicine);
    
  }
}
