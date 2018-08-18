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


const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'adminlogin', component: AdminLogComponent},
  {path: 'admindash', component: AdminDashComponent},
  {path: 'trainerlogin', component: TrainerLoginComponent},
  {path: 'trainersignup', component: TrainerSignupComponent},
  {path: 'couchlogin', component: CouchLoginComponent},
  {path: 'couchsignup', component: CouchSignupComponent},
  {path: 'login', component: LoginComponent },
  {path: 'dash', component: DashboardComponent},
  {path: 'callback', component: CallbackComponent},
  { path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(appRoutes);
