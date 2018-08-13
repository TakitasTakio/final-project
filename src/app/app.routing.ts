import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CallbackComponent} from './callback/callback.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'dash', component: DashboardComponent},
  {path: 'callback', component: CallbackComponent},
  { path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(appRoutes);
