import { Component,OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // isUserLoggedIn:boolean=false;
HardcodedAuthenticationService: any;
  constructor(public hardcoded:HardcodedAuthenticationService){}
  ngOnInit(){
    // this.isUserLoggedIn=this.hardcoded.isUserLoggedIn();
  }
}
