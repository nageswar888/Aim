import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {QueryApi} from "../../common/request/QueryApi";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {

  constructor(private queryApi:QueryApi) { }

  postassettypedetails(data):Observable<any>{
    return this.queryApi.doPost('ADDASSETTYPEDETAILS',data)
      .pipe(
        catchError(err => of([err]))
      );
  }

  getassettypedetails(params):Observable<any>{
    return this.queryApi.doGet('READASSETTYPEDETAILS',{params})
      .pipe(
        catchError(err => of([err]))
      );
  }

}
