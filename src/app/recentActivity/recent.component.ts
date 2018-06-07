import {Component} from '@angular/core'

@Component({
    selector: 'recentActivity',
    templateUrl: './recent.component.html',
    styleUrls: ['./recent.component.css']
})
export class RecentActyComponent{
    userName = 'Viswesh J';
    lastLogin = 'Sun Apr 15 20:06:35';
    acctNum ='055801545246';
    acctBalance ='11869.32';
    eWalletId = 'e-Wallet';

        public trns =
        [
            {"position": "1", "name": "Myntra Llc", "valueDate": "21-Jan-2018", "type": "Debit", "balance" : "$22900", "amount": "$111"},
            {"position": "2", "name": "Bofa Credit", "valueDate": "03-Dec-2017", "type": "Credit", "balance" : "$23000", "amount": "$11908"},
            {"position": "4", "name": "Aroma Biriyani", "valueDate": "29-Nov-2017", "type": "Debit", "balance" : "$14567", "amount": "$2467" },
            {"position": "5", "name": "Infosys Sep Pay", "valueDate": "01-Nov-2017", "type": "Credit", "balance" : "$14890", "amount": "$265"},
            {"position": "6", "name": "Costco Gasoline", "valueDate": "28-Oct-2017", "type": "Debit", "balance" : "$13500", "amount": "$1890"},
            {"position": "7", "name": "Priyanka Transfer", "valueDate": "28-Oct-2017", "type": "Credit", "balance" : "$13900", "amount": "$400"},
            {"position": "8", "name": "Chase cash back ", "valueDate": "05-Oct-2017", "type": "Credit", "balance" : "$12456", "amount": "$456"},
            {"position": "9", "name": "Flipkart Purchase", "valueDate": "18–Sep-2017", "type": "Debit", "balance" : "$12344", "amount": "$111"}
             ];        
}