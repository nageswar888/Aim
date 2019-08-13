import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {QueryApi} from "../../common/request/QueryApi";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private queryApi:QueryApi) { }

  postprojectdetails(value):Observable<any> {
    return this.queryApi.doPost('ADDPROJECTDETAILS',value)
      .pipe(
        catchError(err => of([err]))
      );
  }
  getprojectdetails(params):Observable<any>{
     return this.queryApi.doGet('READPROJECTDETAILS',{params})
      .pipe(
        catchError(err => of([err]))
      );
  }}

