import {Injectable} from '@angular/core';

@Injectable()

export class AdminLoginServiceUser {

   static login(username, password) {
    const credentials = {
      username: username,
      password: password,
    };
    return fetch('https://node-project-final-server-sw.herokuapp.com/api/admin/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });

  }

  profile() {
    return fetch('https://node-project-final-server-sw.herokuapp.com/api/admin/profile', {
      credentials: 'include',
    })
      .then(response => response.json());
  }



   logout() {
    return fetch('https://node-project-final-server-sw.herokuapp.com/api/admin/logout', {
      method: 'post',
      credentials: 'include',
    });

  }






}
