import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  onApprove(medId: any){
    this._credService.changeMed(medId).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    });
}
}
