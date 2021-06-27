import { Component, OnInit } from '@angular/core';
import {CredentialService} from 'src/app/credential.service';

@Component({
  selector: 'app-sharecredspage',
  templateUrl: './sharecredspage.component.html',
  styleUrls: ['./sharecredspage.component.css']
})
export class SharecredspageComponent implements OnInit {

  constructor(private _credService : CredentialService) { }

  ngOnInit(): void {
    
  }
}
