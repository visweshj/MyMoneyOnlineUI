import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private actionUrl: string;


  constructor(private http: HttpClient) {
    this.actionUrl = "http://localhost:7078";
   }

}
