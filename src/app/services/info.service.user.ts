export class InfoServiceUser {

  INFO_URL = 'http://localhost:7000/api/user/UID/info';

  findInfoByUser(userId) {
    return fetch(this.INFO_URL.replace('UID', userId))
      .then(response => response.json());
  }
  createInfo(user, firstName, lastName, birthDate, height, weight, bodyFat, image) {
    const info = {
      user,
      firstName,
      lastName,
      birthDate,
      height,
      weight,
      bodyFat,
      image
    };
    return fetch(this.INFO_URL.replace('UID', user), {
        method: 'post',
        body: JSON.stringify(info),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  deleteInfo(userId, infoId) {


    return fetch(this.INFO_URL.replace('UID', userId) + '/' + infoId, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }


}
