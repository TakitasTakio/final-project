import { Component, OnInit } from '@angular/core';
import {TrainerLoginServiceUser} from '../services/trainer.login.service.user';
import {Router} from '@angular/router';
import {CourseServiceUser} from '../services/admin.cs.set.service';
import {Course} from '../models/course.model';
import {UnitServiceUser} from '../services/admin.unit.set.service';
import {LessonServiceUser} from '../services/admin.lesson.set.service';

@Component({
  selector: 'app-trainer-add-course',
  templateUrl: './trainer-add-course.component.html',
  styleUrls: ['./trainer-add-course.component.css']
})
export class TrainerAddCourseComponent implements OnInit {

  constructor(private service: TrainerLoginServiceUser,
              private router: Router,
              private serviceCourse: CourseServiceUser,
              private serviceUnit: UnitServiceUser,
              private serviceLesson: LessonServiceUser, ) { }
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

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['trainerlogin']));
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
    this.serviceCourse.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
