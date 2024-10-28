import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent, 
    children: [
      { 
        path: '', 
        redirectTo: 'loginPage', 
        pathMatch: 'full' 
      },
      { 
        path: 'loginPage', 
        component: LoginPageComponent 
      },
      { 
        path: 'signIn', 
        component: SignInComponent 
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
