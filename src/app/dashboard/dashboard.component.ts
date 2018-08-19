import { Component, OnInit } from '@angular/core';
import {TrainerLoginServiceUser} from '../services/trainer.login.service.user';
import {Router} from '@angular/router';
import {InfoServiceUser} from '../services/info.service.user';
import {Injectable} from '@angular/core';
import {NewsServiceUser} from '../services/news.service.user';

@Injectable()


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: TrainerLoginServiceUser,
              private router: Router,
              private serviceII: InfoServiceUser,
              private serviceNews: NewsServiceUser) { }

  todayDate = new Date();
  user = {};
  storys = [];
  username;
  firstName;
  lastName;
  email;
  _id;
  birthDate;
  height;
  weight;
  image;
  bodyFat;
  userId;
  info = {};
  selectedUserId = 0;


  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['trainerlogin']));
  }

  clickUser(userId) {
    this.selectedUserId = userId;
    this.serviceII.findInfoByUser(userId)
      .then(info => this.info = info);

  }
  loadInfo(userId) {
    this.selectedUserId = userId;
    this.serviceII.findInfoByUser(userId)
      .then(info => this.info = info);

  }

  createInfo(user, firstName, lastName, birthDate, height, weight, bodyFat, image) {
    this.selectedUserId = user;
    this.serviceII.createInfo(user, firstName, lastName, birthDate, height, weight, bodyFat, image)
      .then(() => {
        this.loadInfo(user);
      });
  }

  deleteInfo(userId, infoId) {
    this.serviceII.deleteInfo(userId, infoId)
      .then(() => {
        this.loadInfo(userId);
      });
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

    this.serviceNews.findAllPushedNews()
      .then(storys => this.storys = storys);




  }

}
