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


@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    AddContactComponent,
    ViewContactComponent,
    AddDocumentComponent,
    ViewDocumentsComponent,
    AppListComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
  ],
  exports: [HeaderComponent]
})

export class ApplicationModule { }
