import { Component, OnInit } from '@angular/core';
import {NewsServiceUser} from '../services/news.service.user';
import {Router} from '@angular/router';
import {CourseServiceUser} from '../services/admin.cs.set.service';
import {Course} from '../models/course.model';
import {UnitServiceUser} from '../services/admin.unit.set.service';
import {LessonServiceUser} from '../services/admin.lesson.set.service';


@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css']
})
export class GuestPageComponent implements OnInit {

  todayDate = new Date();
  storys = [];
  courses: Course[] = [ ];
  selectedCourseId = 0;
  selectedUnitId = 0;
  selectedLessonId = 0;
  units = [];
  unitTitle = '';
  lessonTitle = '';
  lessons = [];
  unitId = '';
  courseId = '';
  constructor(
    private service: NewsServiceUser,
    private router: Router,
    private serviceCourse: CourseServiceUser,
    private serviceUnit: UnitServiceUser,
    private serviceLesson: LessonServiceUser,
  ) {}

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.serviceUnit.findModuleByCourse(courseId)
      .then(units =>
        this.units = units);
  }

  loadModules(courseId) {
    this.courseId = courseId;
    this.serviceUnit.findModuleByCourse(courseId)
      .then(units => this.units = units);
  }

  loadLessons(unitId) {
    this.unitId = unitId;
    this.serviceLesson.findLessonByModule(unitId)
      .then(lessons => this.lessons = lessons);
  }
  clickUnit(unitId) {
    this.selectedUnitId = unitId;
    this.serviceLesson.findLessonByModule(unitId)
      .then(lessons => this.lessons = lessons);
  }

  ngOnInit() {
    this.service.findAllPushedNews()
      .then(storys => this.storys = storys);

    this.serviceCourse.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
