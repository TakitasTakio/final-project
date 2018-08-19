import {Injectable} from '@angular/core';

@Injectable()

export class CourseServiceUser {
  COURSE_URL = 'http://localhost:7000/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());

  }

}
