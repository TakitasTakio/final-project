import { Component, OnInit, Injectable } from '@angular/core';
import {CouchLoginServiceUser} from '../services/couch.login.service.user';
import {Router} from '@angular/router';




@Injectable()

@Component({
  selector: 'app-couch-signup',
  templateUrl: './couch-signup.component.html',
  styleUrls: ['./couch-signup.component.css']
})
export class CouchSignupComponent implements OnInit {
  username;
  password;
  email;

  constructor(private service: CouchLoginServiceUser,
              private router: Router) { }
  signup(username, password, email) {
    this.service.createCouch(username, password, email)
      .then( () => this.router.navigate(['couchdash']));
  }

  ngOnInit() {
  }

}
