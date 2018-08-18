import { Component, OnInit } from '@angular/core';
import {UserServiceUser} from '../services/user.service.user';
import {User} from '../models/user.model';
import {InfoServiceUser} from '../services/info.service.user';
import {ActivatedRoute} from '@angular/router';
import {PremierServiceUser} from '../services/premier.service.user';



@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  constructor(private service: UserServiceUser,
              private serviceII: InfoServiceUser,
              private serviceV: PremierServiceUser,
              private route: ActivatedRoute,
      )  {
    this.route.params.subscribe(params => this.loadInfos(params['userId']));
    this.route.params.subscribe(params => this.loadPrems(params['userId']));
  }
  users: User[] = [ ];
  userId = '';
  selectedUserId = 0;
  infos = [];
  prems = [];





  loadInfos(userId) {
    this.userId = userId;
    this.serviceII.findInfoByUser(userId)
      .then(infos => this.infos = infos);
  }

  clickUser(userId) {
    this.selectedUserId = userId;
    this.serviceII.findInfoByUser(userId)
      .then(infos => this.infos = infos);

  }

  loadPrems(userId) {
    this.userId = userId;
    this.serviceV.findPremByUser(userId)
      .then(prems => this.prems = prems);
  }

  clickUserforPrem(userId) {
    this.selectedUserId = userId;
    this.serviceV.findPremByUser(userId)
      .then(prems => this.prems = prems);

  }

  openPrem(user) {
    this.selectedUserId = user;
    this.serviceV.openPrem(user)
      .then(() => {
        this.loadPrems(user);
      });
  }

  deletePrem(premId) {
    this.serviceV.deletePrem(this.userId, premId)
      .then( () => {
        this.loadPrems(this.userId);
      });
  }

  ngOnInit() {
    this.service.findAllUsers()
      .then(users => this.users = users);

  }

}



