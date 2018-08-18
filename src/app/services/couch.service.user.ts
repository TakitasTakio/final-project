import {Injectable} from '@angular/core';

@Injectable()

export class CouchServiceUser {
  C_URL = 'http://localhost:7000/api/couch';
  findAllCouchs() {
    return fetch(this.C_URL)
      .then(response => response.json());
  }

  findCouchById(couchId) {
    return fetch(this.C_URL + '/' + couchId)
      .then(response => response.json());

  }

}
