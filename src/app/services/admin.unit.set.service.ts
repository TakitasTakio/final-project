export class UnitServiceUser {

  MOD_URL = 'https://node-project-final-server-sw.herokuapp.com/api/course/CID/unit';

  findModuleByCourse(courseId) {
    return fetch(this.MOD_URL.replace('CID', courseId))
      .then(response => response.json());
  }
  createModule(course, title) {
    const unit = {
      course,
      title,
    };
    return fetch(this.MOD_URL.replace('CID', course), {
        method: 'post',
        body: JSON.stringify(unit),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  deleteModule(courseId, unitId) {


    return fetch(this.MOD_URL.replace('CID', courseId) + '/' + unitId, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }
}
