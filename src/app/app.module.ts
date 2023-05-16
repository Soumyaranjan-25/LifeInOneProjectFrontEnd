import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from "./login/login.module";
import { authIntercepterProviders } from './environment/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationModule } from './application/application.module';

@NgModule({
    declarations: [
        AppComponent,
        ApplicationComponent,
        LoginComponent,
    ],
    providers: [authIntercepterProviders],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LoginModule,
        HttpClientModule,
        ApplicationModule
    ]
})
export class AppModule { }
