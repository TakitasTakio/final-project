import {Injectable} from '@angular/core';

@Injectable()

export class TrainerLoginServiceUser {

  static login(username, password) {
    const credentials = {
      username: username,
      password: password,
    };
    return fetch('https://node-project-final-server-sw.herokuapp.com/api/user/login', {
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

    return fetch('https://node-project-final-server-sw.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });

  }

  profile() {
    return fetch('https://node-project-final-server-sw.herokuapp.com/api/user/profile', {
      credentials: 'include',
    })
      .then(response => response.json());
  }



  logout() {
    return fetch('https://node-project-final-server-sw.herokuapp.com/api/user/logout', {
      method: 'post',
      credentials: 'include',
    });

  }






}
