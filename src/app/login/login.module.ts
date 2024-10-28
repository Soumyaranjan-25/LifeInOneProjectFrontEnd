import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { PoemComponent } from './poem/poem.component';
import { BootstrapModule } from '../shared/bootstrap.module';
@NgModule({
  declarations: [
    LoginPageComponent,
    SignInComponent,
    PoemComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    BootstrapModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PoemComponent]
})
export class LoginModule { }
