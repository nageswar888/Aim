import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor{
  token :any;

  constructor() {
    this.token=localStorage.getItem('token');

  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if(req.url.includes("/login")){
      return next.handle(req);
    }
    const auth=localStorage.getItem('token');
    const authReq = req.clone({ setHeaders: { Authorization: auth } });
    return next.handle(authReq);

  }
}
