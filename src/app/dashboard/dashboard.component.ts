import { Component, OnInit } from '@angular/core';
import {TrainerLoginServiceUser} from '../services/trainer.login.service.user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: TrainerLoginServiceUser,
              private router: Router, ) { }

  user = {};
  username;
  firstName;
  lastName;
  email;
  _id;


  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['trainerlogin']));
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.username = user.username);
    this.service
      .profile()
      .then(user => this.email = user.email);
    this.service
      .profile()
      .then(user => this._id = user._id);

  }

}
