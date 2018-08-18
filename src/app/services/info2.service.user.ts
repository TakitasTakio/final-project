export class Info2ServiceUser {

  INFO2_URL = 'http://localhost:7000/api/couch/CID/info2';

  findInfo2ByCouch(couchId) {
    return fetch(this.INFO2_URL.replace('CID', couchId))
      .then(response => response.json());
  }
  createInfo2(couch, firstName) {
    const info2 = {
      couch,
      firstName,
    };
    return fetch(this.INFO2_URL.replace('CID', couch), {
        method: 'post',
        body: JSON.stringify(info2),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  deleteInfo2(couchId, info2Id) {


    return fetch(this.INFO2_URL.replace('CID', couchId) + '/' + info2Id, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }


}
