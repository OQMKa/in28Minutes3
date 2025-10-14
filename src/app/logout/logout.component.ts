import { Component,OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private hardCoded :HardcodedAuthenticationService){

  }
  ngOnInit(){
    this.hardCoded.userLoggedOut();
  }
}
