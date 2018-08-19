import {Component, Injectable, OnInit} from '@angular/core';
import {TrainerLoginServiceUser} from '../services/trainer.login.service.user';
import {Router} from '@angular/router';




@Injectable()

@Component({
  selector: 'app-trainer-signup',
  templateUrl: './trainer-signup.component.html',
  styleUrls: ['./trainer-signup.component.css']
})
export class TrainerSignupComponent implements OnInit {

  username;
  password;
  email;

  constructor(private service: TrainerLoginServiceUser,
              private router: Router) { }

  signup(username, password, email) {
    this.service.createUser(username, password, email)
      .then( () => this.router.navigate(['dash']));
  }

  ngOnInit() {
  }

}
