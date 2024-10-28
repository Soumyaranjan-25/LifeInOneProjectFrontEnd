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
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { BootstrapModule } from './shared/bootstrap.module';
import { MaterialModule } from './shared/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
@NgModule({
    declarations: [
        AppComponent,
        ApplicationComponent,
        LoginComponent,
        LandingPageComponent,
    ],
    providers: [authIntercepterProviders],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LoginModule,
        HttpClientModule,
        ApplicationModule,
        CKEditorModule,
        MatProgressSpinnerModule,
        NgxUiLoaderModule,
        NgxUiLoaderRouterModule,
        NgxUiLoaderHttpModule,
        BootstrapModule,
        MaterialModule
    ]
})
export class AppModule { }

