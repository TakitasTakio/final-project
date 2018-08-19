export class LessonServiceUser {


  UNIT_URL = 'https://node-project-final-server-sw.herokuapp.com/api/unit/UID/lesson';

  findLessonByModule(unitId) {
    return fetch(this.UNIT_URL.replace('UID', unitId))
      .then(response => response.json());
  }
  createLesson(unit, title) {
    const lesson = {
      unit,
      title,
    };
    return fetch(this.UNIT_URL.replace('UID', unit), {
        method: 'post',
        body: JSON.stringify(lesson),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  deleteLesson(unitId, lessonId) {


    return fetch(this.UNIT_URL.replace('UID', unitId) + '/' + lessonId, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }



}
