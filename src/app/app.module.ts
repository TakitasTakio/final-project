import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {QRCodeModule} from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService} from './auth/auth.service';
import {CallbackComponent} from './callback/callback.component';
import {Auth2Service} from './auth/auth2.service';
import { AdminLogComponent } from './admin-log/admin-log.component';
import {AdminLoginServiceUser} from './services/admin.login.service.user';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminCouchListComponent } from './admin-couch-list/admin-couch-list.component';
import {UserServiceUser} from './services/user.service.user';
import {InfoServiceUser} from './services/info.service.user';
import {CouchServiceUser} from './services/couch.service.user';
import {Info2ServiceUser} from './services/info2.service.user';
import {PremierServiceUser} from './services/premier.service.user';
import {Premier2ServiceUser} from './services/premier2.service.user';
import { TrainerLoginComponent } from './trainer-login/trainer-login.component';
import { CouchLoginComponent } from './couch-login/couch-login.component';
import { TrainerSignupComponent } from './trainer-signup/trainer-signup.component';
import { CouchSignupComponent } from './couch-signup/couch-signup.component';
import {TrainerLoginServiceUser} from './services/trainer.login.service.user';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CallbackComponent,
    AdminLogComponent,
    AdminDashComponent,
    AdminUserListComponent,
    AdminCouchListComponent,
    TrainerLoginComponent,
    CouchLoginComponent,
    TrainerSignupComponent,
    CouchSignupComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    QRCodeModule,

  ],
  providers: [
    AuthService,
    Auth2Service,
    AdminLoginServiceUser,
    UserServiceUser,
    InfoServiceUser,
    CouchServiceUser,
    Info2ServiceUser,
    PremierServiceUser,
    Premier2ServiceUser,
    TrainerLoginServiceUser,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
