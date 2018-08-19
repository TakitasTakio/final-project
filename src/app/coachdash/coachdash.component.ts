import {Component, Injectable, OnInit} from '@angular/core';
import {CouchLoginServiceUser} from '../services/couch.login.service.user';
import {NewsServiceUser} from '../services/news.service.user';
import {Info2ServiceUser} from '../services/info2.service.user';
import {Router} from '@angular/router';
import {Premier2ServiceUser} from '../services/premier2.service.user';



@Injectable()
@Component({
  selector: 'app-coachdash',
  templateUrl: './coachdash.component.html',
  styleUrls: ['./coachdash.component.css']
})
export class CoachdashComponent implements OnInit {

  constructor(private service: CouchLoginServiceUser,
              private router: Router,
              private serviceII: Info2ServiceUser,
              private serviceNews: NewsServiceUser,
              private servicePremier: Premier2ServiceUser) { }
  todayDate = new Date();
  couch = {};
  couchs = [];
  storys = [];
  prem2s = [];
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
  couchId;
  userId;
  info2 = {};
  selectedCouchId = 0;

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['couchlogin']));
  }

  clickCouch(couchId) {
    this.selectedCouchId = couchId;
    this.serviceII.findInfo2ByCouch(couchId)
      .then(info2 => this.info2 = info2);

  }
  loadInfo2(couchId) {
    this.selectedCouchId = couchId;
    this.serviceII.findInfo2ByCouch(couchId)
      .then(info2 => this.info2 = info2);

  }

  loadPrems(userId) {
    this._id = userId;
    this.servicePremier.findPrem2ByUser(userId)
      .then(prem2s => this.prem2s = prem2s);
  }

  createInfo2(couch, firstName, lastName, birthDate, height, weight, bodyFat, image) {
    this.selectedCouchId = couch;
    this.serviceII.createInfo2(couch, firstName, lastName, birthDate, height, weight, bodyFat, image)
      .then(() => {
        this.loadInfo2(couch);
      });
  }

  deleteInfo2(couchId, info2Id) {
    this.serviceII.deleteInfo2(couchId, info2Id)
      .then(() => {
        this.loadInfo2(couchId);
      });
  }

  ngOnInit() {

    this.service
      .profile()
      .then(couch => this.username = couch.username);
    this.service
      .profile()
      .then(couch => this.email = couch.email);
    this.service
      .profile()
      .then(couch => this._id = couch._id);

    this.serviceNews.findAllPushedNews()
      .then(storys => this.storys = storys);
  }

}
