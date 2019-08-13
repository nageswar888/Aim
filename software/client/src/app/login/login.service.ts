import { Injectable } from '@angular/core';
import { LocalStorage} from "@ngx-pwa/local-storage";
import {Router} from "@angular/router";
import {Observable, of, Subject, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {QueryApi} from "../common/request/QueryApi";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private subject = new Subject<any>();


  constructor(private localStorage:LocalStorage,
              private router:Router,
              private queryApi: QueryApi) { }

  login(data):Observable<any>{
     return this.queryApi.doPost('LOGIN',data)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   // window.alert(errorMessage);
     return throwError(errorMessage);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.subject.next(localStorage.getItem('token'));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.subject.next(localStorage.getItem('token'));
  }

  getUserPayload() {
    let token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);

      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    let userPayload = this.getUserPayload();
     if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    }
    else
      return false;
  }
  headerStatus(): Observable<any> {
    return this.subject.asObservable();
  }


}
