export class PremierServiceUser {

  P_URL = 'http://localhost:7000/api/user/UID/premier';

  findPremByUser(userId) {
    return fetch(this.P_URL.replace('UID', userId))
      .then(response => response.json());
  }
  createPrem(user, location, date, couch) {
    const prem = {
      user,
      location,
      date,
      couch,
    };
    return fetch(this.P_URL.replace('UID', user), {
        method: 'post',
        body: JSON.stringify(prem),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  openPrem(user) {
    const prem = {
      user,
    }
    return fetch(this.P_URL.replace('UID', user), {
        method: 'post',
        body: JSON.stringify(prem),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }

  deletePrem(userId, premId) {


    return fetch(this.P_URL.replace('UID', userId) + '/' + premId, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }


}
