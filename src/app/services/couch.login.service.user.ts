import {Injectable} from '@angular/core';

@Injectable()

export class CouchLoginServiceUser {

   static login(username, password) {
    const credentials = {
      username: username,
      password: password,
    };
    return fetch('http://localhost:7000/api/couch/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });

  }

  profile() {
    return fetch('http://localhost:7000/api/couch/profile', {
      credentials: 'include',
    })
      .then(response => response.json());
  }

  createCouch(username, password, email) {
    const couch = {
      username: username,
      password: password,
      email: email,

    };

    return fetch('http://localhost:7000/api/couch', {
      body: JSON.stringify(couch),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });

  }



  logout() {
    return fetch('http://localhost:7000/api/couch/logout', {
      method: 'post',
      credentials: 'include',
    });

  }






}
