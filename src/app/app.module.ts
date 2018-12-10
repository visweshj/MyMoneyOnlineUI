import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import {FundTxrComponent} from './fundTrnsfr/fundTrnsfr.component';
import { RecentActyComponent } from './recentActivity/recent.component';
import { StatmentComponent } from './statement/stmt.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {routes} from './app.router';
import { AccountSummaryComponent } from './account-summary/account-summary.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FundTxrComponent,
    RecentActyComponent,
    StatmentComponent,
    AccountSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
