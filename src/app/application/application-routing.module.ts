import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { ApplicationComponent } from './application.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ViewContactComponent } from './contact/view-contact/view-contact.component';
import { ViewDiaryComponent } from './diary/view-diary/view-diary.component';
import { WriteDiaryComponent } from './diary/write-diary/write-diary.component';
import { AddDocumentComponent } from './documents/add-document/add-document.component';
import { ViewDocumentsComponent } from './documents/view-documents/view-documents.component';
import { AddTradingDataComponent } from './trading-data/add-trading-data/add-trading-data.component';
import { ViewTradingDataComponent } from './trading-data/view-trading-data/view-trading-data.component';
import { AppLockComponent } from './app-lock/app-lock.component';
import { CreditComponent } from './my-balancesheet/credit/credit.component';
import { DebitComponent } from './my-balancesheet/debit/debit.component';
import { MonthlyBalancesheetComponent } from './my-balancesheet/monthly-balancesheet/monthly-balancesheet.component';
import { OverviewBalancesheetComponent } from './my-balancesheet/overview-balancesheet/overview-balancesheet.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        redirectTo: 'app-list',
        pathMatch: 'full'
      },
      {
        path: 'app-list',
        component: AppListComponent
      },
      {
        path: 'app-lock',
        component: AppLockComponent
      },
      {
        path: 'add-contact',
        component: AddContactComponent
      },
      {
        path: 'view-conatct',
        component: ViewContactComponent
      },
      {
        path: 'add-document',
        component: AddDocumentComponent
      },
      {
        path: 'view-document',
        component: ViewDocumentsComponent
      },
      {
        path: 'write-diary',
        component: WriteDiaryComponent
      },
      {
        path: 'write-diary/:id',
        component: WriteDiaryComponent
      },
      {
        path: 'view-diary',
        component: ViewDiaryComponent
      },
      {
        path: 'add-trading-data',
        component: AddTradingDataComponent
      },
      {
        path: 'add-trading-data/:id',
        component: AddTradingDataComponent
      },
      {
        path: 'view-trading-data',
        component: ViewTradingDataComponent
      },
      {
        path: 'credit',
        component: CreditComponent
      },
      {
        path: 'debit',
        component: DebitComponent
      },
      {
        path: 'monthly-balancesheet',
        component: MonthlyBalancesheetComponent
      },
      {
        path: 'overview-balancesheet',
        component: OverviewBalancesheetComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
