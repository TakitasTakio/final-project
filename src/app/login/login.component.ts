import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Auth2Service} from '../auth/auth2.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  todayDate = new Date();
  constructor(public auth: AuthService,
              public auth2: Auth2Service,
              ) {
    auth.handleAuthentication();
    auth2.handleAuthentication();

  }

  ngOnInit() {
  }

}
