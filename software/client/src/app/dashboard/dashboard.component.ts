import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService:LoginService,
              private router:Router) { }

  ngOnInit() {
  }


}
