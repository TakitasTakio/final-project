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
import { TrainerAddCourseComponent } from './trainer-add-course/trainer-add-course.component';
import { CouchAddCourseComponent } from './couch-add-course/couch-add-course.component';
import { AdminCsSetComponent } from './admin-cs-set/admin-cs-set.component';
import {CourseServiceUser} from './services/admin.cs.set.service';
import {UnitServiceUser} from './services/admin.unit.set.service';
import {LessonServiceUser} from './services/admin.lesson.set.service';
import { NewsUpdateComponent } from './news-update/news-update.component';
import {NewsServiceUser} from './services/news.service.user';
import { GuestPageComponent } from './guest-page/guest-page.component';
import {CouchLoginServiceUser} from './services/couch.login.service.user';
import { CoachdashComponent } from './coachdash/coachdash.component';
import {MeetingServiceUser} from './services/admin.meeting.set.service';
import {MatchServiceUser} from './services/match.service.user';
import { TrainerPremDashComponent } from './trainer-prem-dash/trainer-prem-dash.component';
import { CouchPremDashComponent } from './couch-prem-dash/couch-prem-dash.component';


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
    TrainerAddCourseComponent,
    CouchAddCourseComponent,
    AdminCsSetComponent,
    NewsUpdateComponent,
    GuestPageComponent,
    CoachdashComponent,
    TrainerPremDashComponent,
    CouchPremDashComponent,

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
    CourseServiceUser,
    UnitServiceUser,
    LessonServiceUser,
    NewsServiceUser,
    CouchLoginServiceUser,
    MeetingServiceUser,
    MatchServiceUser,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
