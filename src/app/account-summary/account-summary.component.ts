import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName = 'Viswesh Jagadeesan';
  lastLogin = 'Sun Jun 24 08:06:35';
  acctNum ='055801545246';
  acctBalance ='9438.32';
  eWalletId = 'e-Wallet';

}
