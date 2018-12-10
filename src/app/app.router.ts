import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FundTxrComponent } from './fundTrnsfr/fundTrnsfr.component';
import { RecentActyComponent } from './recentActivity/recent.component';
import { StatmentComponent } from './statement/stmt.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component'


export const router: Routes = [
    {
        path: 'accounts', component: HeaderComponent, children: [
            { path: 'summary', component: AccountSummaryComponent, children:[
                { path: 'activity', component: RecentActyComponent },
                { path: 'stmnt', component: StatmentComponent }
            ] }    
        ]
    },
    { path: 'fundTxr', component: FundTxrComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);