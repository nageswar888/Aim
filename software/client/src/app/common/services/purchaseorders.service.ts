import { Injectable } from '@angular/core';
import {QueryApi} from "../../common/request/QueryApi";
import {catchError} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PurchaseordersService {
  constructor(private queryApi: QueryApi) {
  }
  postpurchaseorderdetails(value: any) {
    return this.queryApi.doPost('ADDPURCHASEORDERDETAILS', value)
      .pipe(
        catchError(err => of([err]))
      );
  }
  getpurchaseorderdetails(params): Observable<any> {
     return this.queryApi.doGet('READPURCHASEORDERDETAILS', {params})
      .pipe(
        catchError(err => of([err]))
      );
  }
}

