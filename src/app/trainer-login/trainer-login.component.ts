import {Component, Injectable, OnInit} from '@angular/core';
import {TrainerLoginServiceUser} from '../services/trainer.login.service.user';
import {Router} from '@angular/router';




@Injectable()
@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.css']
})
export class TrainerLoginComponent implements OnInit {
  username;
  password;
  login(username, password) {
    console.log([username, password]);
    TrainerLoginServiceUser.login(username, password)
      .then(() => {
        this.router.navigate(['dash']);
      });
  }

  constructor(
    private router: Router,
    private service: TrainerLoginServiceUser,
  ) { }

  ngOnInit() {
  }

}
