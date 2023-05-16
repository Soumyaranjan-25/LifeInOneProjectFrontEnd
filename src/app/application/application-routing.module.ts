import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { ApplicationComponent } from './application.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ViewContactComponent } from './contact/view-contact/view-contact.component';

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
        path: 'add-contact', 
        component: AddContactComponent 
      },
      { 
        path: 'view-conatct', 
        component: ViewContactComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
