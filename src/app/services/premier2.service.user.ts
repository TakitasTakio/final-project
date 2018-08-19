export class Premier2ServiceUser {

  P_URL = 'https://node-project-final-server-sw.herokuapp.com/api/couch/CID/premier';

  findPrem2ByUser(couchId) {
    return fetch(this.P_URL.replace('CID', couchId))
      .then(response => response.json());
  }
  createPrem2(user, location, date, couch) {
    const prem2 = {
      user,
      location,
      date,
      couch,
    };
    return fetch(this.P_URL.replace('CID', couch), {
        method: 'post',
        body: JSON.stringify(prem2),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  openPrem2(couch) {
    const prem2 = {
      couch,
    };
    return fetch(this.P_URL.replace('CID', couch), {
        method: 'post',
        body: JSON.stringify(prem2),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }

  deletePrem2(couch, prem2Id) {


    return fetch(this.P_URL.replace('CID', couch) + '/' + prem2Id, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }


}
