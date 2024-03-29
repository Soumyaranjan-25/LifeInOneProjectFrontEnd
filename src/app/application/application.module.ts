import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModule } from '../shared/bootstrap.module';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewContactComponent } from './contact/view-contact/view-contact.component';
import { AddDocumentComponent } from './documents/add-document/add-document.component';
import { ViewDocumentsComponent } from './documents/view-documents/view-documents.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { AppListComponent } from './app-list/app-list.component';
import { WriteDiaryComponent } from './diary/write-diary/write-diary.component';
import { ViewDiaryComponent } from './diary/view-diary/view-diary.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddTradingDataComponent } from './trading-data/add-trading-data/add-trading-data.component';
import { ViewTradingDataComponent } from './trading-data/view-trading-data/view-trading-data.component';
import { ImageModalComponent } from './common/image-modal/image-modal.component';
import { AppLockComponent } from './app-lock/app-lock.component';
import { PasswordChangeDialogComponent } from './common/password-change-dialog/password-change-dialog.component';
import { AppLockPasswordComponent } from './common/app-lock-password/app-lock-password.component';
import { CreditComponent } from './my-balancesheet/credit/credit.component';
import { DebitComponent } from './my-balancesheet/debit/debit.component';
import { MonthlyBalancesheetComponent } from './my-balancesheet/monthly-balancesheet/monthly-balancesheet.component';
import { OverviewBalancesheetComponent } from './my-balancesheet/overview-balancesheet/overview-balancesheet.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    AddContactComponent,
    ViewContactComponent,
    AddDocumentComponent,
    ViewDocumentsComponent,
    AppListComponent,
    WriteDiaryComponent,
    ViewDiaryComponent,
    AddTradingDataComponent,
    ViewTradingDataComponent,
    ImageModalComponent,
    AppLockComponent,
    PasswordChangeDialogComponent,
    AppLockPasswordComponent,
    CreditComponent,
    DebitComponent,
    MonthlyBalancesheetComponent,
    OverviewBalancesheetComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    CKEditorModule,
  
  ],
  exports: [HeaderComponent]
})

export class ApplicationModule { }
