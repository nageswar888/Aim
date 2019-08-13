import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import { QueryApi } from "./request/QueryApi";

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  constructor(private http: HttpClient, private queryApi:QueryApi) { }


  getJsonData(fileName,params) :Observable <any> {
    console.log("---------->",fileName);
    return this.queryApi.doGet(fileName,{params})
      .pipe(map( res =>{
        return res;
      }),
        catchError(err => of([err]))
      );
  }


  getCardJsonData(fileName) :Observable<any>{
    let params;
    return this.queryApi.doGet(fileName,params)
      .pipe(map( res =>{
          return res;
        }),
        catchError(err => of([err]))
      );
  }


  getCategoryData(cardData,data) : Observable<any>{
    let params;
    console.log(cardData);
    const key=cardData;
    return this.queryApi.doGet('CATEGORYWISEDATA',{cardtype:cardData,cardData:data})
      .pipe(map( res =>{
          return res;
        }),
        catchError(err => of([err]))
      );
  }

  getDetails(object,params): Observable<any>{
    //console.log("--------------------",object,params)
    return this.queryApi.doGet(object+'ById',params)
      .pipe(map( res =>{
          return res;
        }),
        catchError(err => of([err]))
      );
  }

  getAssignments(params): Observable<any>{
    console.log("--------->",params)
    return this.queryApi.doGet("ASSETASSIGNMENTS",params)
      .pipe(map( res =>{
          return res;
        }),
        catchError(err => of([err]))
      );
  }

}


