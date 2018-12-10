import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RecentActivity } from './recentActivty';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin' : '*'
      })
    };


@Injectable()
export class RecentActivitySercice {
    private actionUrl: string;


    constructor(private http: HttpClient) {
        this.actionUrl = "http://localhost:7078";
       }

       getTransactions () : Observable<RecentActivity[]> {
        return this.http.get<RecentActivity[]>(this.actionUrl).pipe();
       }

}
