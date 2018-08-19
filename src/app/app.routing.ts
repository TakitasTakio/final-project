import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CallbackComponent} from './callback/callback.component';
import {AdminLogComponent} from './admin-log/admin-log.component';
import {AdminDashComponent} from './admin-dash/admin-dash.component';
import {TrainerLoginComponent} from './trainer-login/trainer-login.component';
import {TrainerSignupComponent} from './trainer-signup/trainer-signup.component';
import {CouchLoginComponent} from './couch-login/couch-login.component';
import {CouchSignupComponent} from './couch-signup/couch-signup.component';
import {TrainerAddCourseComponent} from './trainer-add-course/trainer-add-course.component';
import {CouchAddCourseComponent} from './couch-add-course/couch-add-course.component';
import {AdminCsSetComponent} from './admin-cs-set/admin-cs-set.component';
import {NewsUpdateComponent} from './news-update/news-update.component';
import {GuestPageComponent} from './guest-page/guest-page.component';
import {CoachdashComponent} from './coachdash/coachdash.component';
import {TrainerPremDashComponent} from './trainer-prem-dash/trainer-prem-dash.component';
import {CouchPremDashComponent} from './couch-prem-dash/couch-prem-dash.component';
import {UserListForViewComponent} from './user-list-for-view/user-list-for-view.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'adminlogin', component: AdminLogComponent},
  {path: 'admindash', component: AdminDashComponent},
  {path: 'adminset', component: AdminCsSetComponent},
  {path: 'adminnews', component: NewsUpdateComponent},
  {path: 'trainerlogin', component: TrainerLoginComponent},
  {path: 'trainersignup', component: TrainerSignupComponent},
  {path: 'traineraddcourse', component: TrainerAddCourseComponent},
  {path: 'couchaddcourse', component: CouchAddCourseComponent},
  {path: 'couchlogin', component: CouchLoginComponent},
  {path: 'couchsignup', component: CouchSignupComponent},
  {path: 'couchdash', component: CoachdashComponent},
  {path: 'login', component: LoginComponent },
  {path: 'trainerpremier', component: TrainerPremDashComponent},
  {path: 'couchpremier', component: CouchPremDashComponent},
  {path: 'guest', component: GuestPageComponent},
  {path: 'userlist', component: UserListForViewComponent},
  {path: 'dash', component: DashboardComponent},
  {path: 'callback', component: CallbackComponent},
  { path: '**', redirectTo: '' },


];

export const routing = RouterModule.forRoot(appRoutes);
