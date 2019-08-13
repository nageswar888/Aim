import { Injectable } from '@angular/core';
import {QueryApi} from "../../common/request/QueryApi";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InvoicelineService {
  constructor(private queryApi:QueryApi) { }

  postinvoicelinedetails(data):Observable<any>{
    return this.queryApi.doPost('ADDINVOICELINEDETAILS',data)
      .pipe(
        catchError(err => of([err]))
      );
  }

  getinvoicelinedetails():Observable<any>{
    let params;
    return this.queryApi.doGet('READINVOICELINEDETAILS',params)
      .pipe(
        catchError(err => of([err]))
      );
  }}
