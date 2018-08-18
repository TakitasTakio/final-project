import { Component, OnInit } from '@angular/core';
import {AdminLoginServiceUser} from '../services/admin.login.service.user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor( private service: AdminLoginServiceUser,
               private router: Router,
  ) { }

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['adminlogin']));
  }

  ngOnInit() {
  }

}
