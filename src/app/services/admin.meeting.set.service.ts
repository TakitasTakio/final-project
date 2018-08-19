export class MeetingServiceUser {

  CON_URL = 'https://node-project-final-server-sw.herokuapp.com/api/lesson/LID/meeting';


  findMeetingByLesson(lessonId) {
    return fetch(this.CON_URL.replace('LID', lessonId))
      .then(response => response.json());
  }

  createMeeting(lesson, couch, date, location) {
    const meeting = {
      couch,
      date,
      location,
      lesson
    };
    return fetch(this.CON_URL.replace('LID', lesson), {
        method: 'post',
        body: JSON.stringify(meeting),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  deleteMeeting(lessonId, meetingId) {


    return fetch(this.CON_URL.replace('LID', lessonId) + '/' + meetingId, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }






}
