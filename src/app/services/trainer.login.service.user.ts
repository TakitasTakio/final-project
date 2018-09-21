import {Injectable} from '@angular/core';

@Injectable()

export class TrainerLoginServiceUser {

  static login(username, password) {
    const credentials = {
      username: username,
      password: password,
    };
    return fetch('http://localhost:7000/api/user/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });

  }

  createUser(username, password, email) {
    const user = {
      username: username,
      password: password,
      email: email,

    };

    return fetch('http://localhost:7000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });

  }

  profile() {
    return fetch('http://localhost:7000/api/user/profile', {
      credentials: 'include',
    })
      .then(response => response.json());
  }



  logout() {
    return fetch('http://localhost:7000/api/user/logout', {
      method: 'post',
      credentials: 'include',
    });

  }






}