import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { LoginService} from "../login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,
              private loginService:LoginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
      this.loginService.deleteToken();
      return false;
    }
    return true;
  }


}
