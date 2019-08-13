import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {QueryApi} from "../../common/request/QueryApi";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private queryApi:QueryApi) { }

  postresourcedetails(value):Observable<any> {
     return this.queryApi.doPost('ADDRESOURCEDETAILS',value)

      .pipe(
        catchError(err => of([err]))
      );
  }

  getresourcedetails():Observable<any>{
    let params;
    return this.queryApi.doGet('READRESOURCEDETAILS',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
