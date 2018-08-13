import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService} from './auth/auth.service';
import {CallbackComponent} from './callback/callback.component';
import {Auth2Service} from './auth/auth2.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CallbackComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,

  ],
  providers: [
    AuthService,
    Auth2Service,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
