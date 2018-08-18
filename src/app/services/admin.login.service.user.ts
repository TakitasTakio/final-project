import {Injectable} from '@angular/core';

@Injectable()

export class AdminLoginServiceUser {

   static login(username, password) {
    const credentials = {
      username: username,
      password: password,
    };
    return fetch('http://localhost:7000/api/admin/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });

  }

  profile() {
    return fetch('http://localhost:7000/api/admin/profile', {
      credentials: 'include',
    })
      .then(response => response.json());
  }



   logout() {
    return fetch('http://localhost:7000/api/admin/logout', {
      method: 'post',
      credentials: 'include',
    });

  }






}
