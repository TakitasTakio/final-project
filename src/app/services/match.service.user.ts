export class MatchServiceUser {

  CON_URL = 'https://node-project-final-server-sw.herokuapp.com/api/meeting/MID/match';


  findMatchByMeeting(meetingId) {
    return fetch(this.CON_URL.replace('MID', meetingId))
      .then(response => response.json());
  }

  createMatch(meeting, couch, user) {
    const match = {
      meeting,
      couch,
      user,
    };
    return fetch(this.CON_URL.replace('MID', meeting), {
        method: 'post',
        body: JSON.stringify(match),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  deleteMatch(meetingId, matchId) {


    return fetch(this.CON_URL.replace('MID', meetingId) + '/' + matchId, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }






}
