import { Component, OnInit } from '@angular/core';
import {AdminLoginServiceUser} from '../services/admin.login.service.user';
import {Router} from '@angular/router';
import {CourseServiceUser} from '../services/admin.cs.set.service';
import {Course} from '../models/course.model';
import {UnitServiceUser} from '../services/admin.unit.set.service';
import {LessonServiceUser} from '../services/admin.lesson.set.service';

@Component({
  selector: 'app-admin-cs-set',
  templateUrl: './admin-cs-set.component.html',
  styleUrls: ['./admin-cs-set.component.css']
})
export class AdminCsSetComponent implements OnInit {

  selectedCourseId = 0;
  selectedUnitId = 0;
  selectedLessonId = 0;
  courses: Course[] = [ ];
  units = [];
  unitTitle = '';
  lessonTitle = '';
  lessons = [];
  unitId = '';
  courseId = '';
  constructor(
    private service: AdminLoginServiceUser,
    private router: Router,
    private serviceCourse: CourseServiceUser,
    private serviceUnit: UnitServiceUser,
    private serviceLesson: LessonServiceUser,
  ) { }

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['adminlogin']));
  }

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
  createUnit(courseId , unitTitle) {
    this. selectedCourseId = courseId;
    this.serviceUnit.createModule(courseId, unitTitle)
      .then(() => {
        this.loadModules(courseId);

      });


  }

  deleteUnit(courseId, unitId) {
    this.selectedCourseId = courseId;
    this.serviceUnit.deleteModule(courseId, unitId)
      .then( () => {
        this.loadModules(courseId);
      });
  }

  loadLessons(unitId) {
    this.unitId = unitId;
    this.serviceLesson.findLessonByModule(unitId)
      .then(lessons => this.lessons = lessons);
  }

  createLesson(unitId , lessonTitle) {
    this. selectedUnitId = unitId;
    this.serviceLesson.createLesson(unitId, lessonTitle)
      .then(() => {
        this.loadLessons(unitId);

      });


  }

  deleteLesson(unitId, lessonId) {
    this.selectedUnitId = unitId;
    this.serviceLesson.deleteLesson(unitId, lessonId)
      .then( () => {
        this.loadLessons(unitId);
      });
  }

  clickUnit(unitId) {
    this.selectedUnitId = unitId;
    this.serviceLesson.findLessonByModule(unitId)
      .then(lessons => this.lessons = lessons);
  }


  ngOnInit() {
    this.serviceCourse.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
