import { Component, OnInit } from '@angular/core';
import {AdminLoginServiceUser} from '../services/admin.login.service.user';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent implements OnInit {
  username;
  password;

  login(username, password) {
    console.log([username, password]);
    AdminLoginServiceUser.login(username, password)
      .then(() => {
        this.router.navigate(['admindash']);
      });
  }

  constructor(private router: Router,
              private service: AdminLoginServiceUser) { }

  ngOnInit() {
  }

}
