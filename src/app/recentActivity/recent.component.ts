import {Component} from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecentActivity } from './recentActivty' ;
import { RecentActivitySercice } from './recent.service';


@Component({
    selector: 'recentActivity',
    templateUrl: './recent.component.html',
    styleUrls: ['./recent.component.css'],
    providers : [RecentActivitySercice]
})
export class RecentActyComponent{
    private actionUrl: string;
    recentTransactions : RecentActivity[];

        
    ngOnInit() {
        this.getTransactions();
    }



    constructor(private txnSvc: RecentActivitySercice) {
      this.actionUrl = "http://localhost:7078";
     }

    userName = 'Viswesh J';
    lastLogin = 'Sun Apr 15 20:06:35';
    acctNum ='055801545246';
    acctBalance ='11869.32';
    eWalletId = 'e-Wallet';


    /**
     * name
     */
    public  getTransactions() {
      this.txnSvc.getTransactions().subscribe(recentTransactions => this.recentTransactions = recentTransactions);
      console.log(this.recentTransactions);
    }
          
}