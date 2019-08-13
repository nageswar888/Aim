import { Injectable } from '@angular/core';
import { QueryApi } from "../request/QueryApi";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AssetrequestService {


  constructor(private queryApi:QueryApi) { }

  postassetrequestdetails(data):Observable<any>{
     return this.queryApi.doPost('ADDASSETREQUESTDETAILS',data)
      .pipe(
        catchError(err => of([err]))
      );
  }

  getassetrequestdetails(params):Observable<any>{
     return this.queryApi.doGet('READASSETREQUESTDETAILS',{params})
      .pipe(
        catchError(err => of([err]))
      );
  }}
