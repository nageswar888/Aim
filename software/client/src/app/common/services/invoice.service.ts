import { Injectable } from '@angular/core';
import {QueryApi} from "../../common/request/QueryApi";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private queryApi:QueryApi) { }

  postinvoicedetails(data):Observable<any>{
    return this.queryApi.doPost('ADDINVOICEDETAILS',data)
      .pipe(
        catchError(err => of([err]))
      );
  }
  getinvoicedetails():Observable<any>{
    let params;
    return this.queryApi.doGet('READINVOICEDETAILS',params)
      .pipe(
        catchError(err => of([err]))
      );
  }}
