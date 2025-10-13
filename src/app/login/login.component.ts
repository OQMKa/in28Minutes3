import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  username = "om";
  password = "dummy";
  invalidLogin = false;
  errorMessage = "Invalid Creds!";

  handleLogin() {
    // throw new Error('Method not implemented.');
    if (this.username == "om" && this.password == "dummy") {
      this.invalidLogin = false;
      console.log("login Success!...");
      this.router.navigate(['welcome']);
      // console.log("login Success!2...")
    } else {
      this.invalidLogin = true;
      console.log("login Failed!...")
      this.router.navigate(['welcome']);
    }

  }

}
