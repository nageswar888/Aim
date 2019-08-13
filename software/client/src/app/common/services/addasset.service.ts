import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {QueryApi} from "../../common/request/QueryApi";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AddassetService {

  constructor(private queryApi:QueryApi) { }

  postassetdetails(data):Observable<any>{
    return this.queryApi.doPost('ADDASSETSDETAILS',data)
      .pipe(
        catchError(err => of([err]))
      );
  }

  getassetdetails():Observable<any>{
    let params;
    return this.queryApi.doGet('READASSETDETAILS',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
