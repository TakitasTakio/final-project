import {Component, Injectable, OnInit} from '@angular/core';
import {CouchLoginServiceUser} from '../services/couch.login.service.user';
import {Router} from '@angular/router';



@Injectable()
@Component({
  selector: 'app-couch-login',
  templateUrl: './couch-login.component.html',
  styleUrls: ['./couch-login.component.css']
})
export class CouchLoginComponent implements OnInit {
  username;
  password;
  login(username, password) {
    CouchLoginServiceUser.login(username, password)
      .then(() => {
        this.router.navigate(['couchdash']);
      });
  }

  constructor(
    private router: Router,
    private service: CouchLoginServiceUser,
  ) { }


  ngOnInit() {
  }

}
