import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Component } from '@angular/core'

@Component({
    selector: 'myHeader',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    private actionUrl: string;


    constructor(private http: HttpClient) {
      this.actionUrl = "http://localhost:7078";
     }

    userName = 'Viswesh Jagadeesan';
    lastLogin = 'Sun Jun 24 08:06:35';
    acctNum ='055801545246';
    acctBalance ='9438.32';
    eWalletId = 'e-Wallet';

        public trns =
        this.http.get(this.actionUrl);
}
 



