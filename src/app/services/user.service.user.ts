import {Injectable} from '@angular/core';

@Injectable()

export class UserServiceUser {
  USER_URL = 'http://localhost:7000/api/user';
  findAllUsers() {
    return fetch(this.USER_URL)
      .then(response => response.json());
  }

  findUserById(userId) {
    return fetch(this.USER_URL + '/' + userId)
      .then(response => response.json());

  }

}
