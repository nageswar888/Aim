import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
 public login:boolean=false;
  public subscription: Subscription;
  constructor(private loginservice : LoginService) {
    // if userID and password is correct gets the token from server
    this.subscription=this.loginservice.headerStatus()
      .subscribe(data =>{
        if(data){
          this.login=true;
         }
        else{
          this.login=false;
         }
      })
  }

  ngOnInit() {//checks whether logged in or logged out
    this.login=this.loginservice.isLoggedIn();
  }
  logOut(){ // removes token from local storage and exits the session
    this.loginservice.deleteToken();
  }

}
