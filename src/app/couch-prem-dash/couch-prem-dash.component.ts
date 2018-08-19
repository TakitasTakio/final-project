import { Component, OnInit } from '@angular/core';
import {CourseServiceUser} from '../services/admin.cs.set.service';
import {UnitServiceUser} from '../services/admin.unit.set.service';
import {LessonServiceUser} from '../services/admin.lesson.set.service';
import {CouchLoginServiceUser} from '../services/couch.login.service.user';
import {Router} from '@angular/router';
import {Course} from '../models/course.model';
import {MeetingServiceUser} from '../services/admin.meeting.set.service';
import {MatchServiceUser} from '../services/match.service.user';
import {InfoServiceUser} from '../services/info.service.user';

@Component({
  selector: 'app-couch-prem-dash',
  templateUrl: './couch-prem-dash.component.html',
  styleUrls: ['./couch-prem-dash.component.css']
})
export class CouchPremDashComponent implements OnInit {

  constructor(
    private service: CouchLoginServiceUser,
    private router: Router,
    private serviceCourse: CourseServiceUser,
    private serviceUnit: UnitServiceUser,
    private serviceLesson: LessonServiceUser,
    private serviceMeeting: MeetingServiceUser,
    private serviceMatch: MatchServiceUser,
    private serviceInfo: InfoServiceUser,
  ) { }

  selectedCourseId = 0;
  selectedUnitId = 0;
  selectedLessonId = 0;
  selectedCouchId = 0;
  selectedMeetingId = 0;
  selectedUserId = 0;
  courses: Course[] = [ ];
  units = [];
  unitTitle = '';
  lessonTitle = '';
  lessons = [];
  meetings = [];
  matchs = [];
  username;
  _id;
  couchId;
  email;
  date;
  location;
  couch = {};
  info = {};
  unitId = '';
  courseId = '';
  lessonId = '';

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['couchlogin']));
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

  clickLesson(lessonId) {
    this.selectedLessonId = lessonId;
    this.serviceMeeting.findMeetingByLesson(lessonId)
      .then(meetings => this.meetings = meetings);
  }

  loadMeetings(lessonId) {
    this.lessonId = lessonId;
    this.serviceMeeting.findMeetingByLesson(lessonId)
      .then(meetings => this.meetings = meetings);
  }

  createMeeting(lesson, couch, date, location) {
    this. selectedLessonId = lesson;
    this.serviceMeeting.createMeeting(lesson, couch, date, location)
      .then(() => {
        this.loadMeetings(lesson);

      });


  }

  deleteMeeting(lessonId, meetingId) {
    this.selectedLessonId = lessonId;
    this.serviceMeeting.deleteMeeting(lessonId, meetingId)
      .then( () => {
        this.loadMeetings(lessonId);
      });
  }

  loadMatch(meetingId) {
    this.selectedMeetingId = meetingId;
    this.serviceMatch.findMatchByMeeting(meetingId)
      .then(matchs => this.matchs = matchs);
  }
  loadInfo(userId) {
    this.selectedUserId = userId;
    this.serviceInfo.findInfoByUser(userId)
      .then(info => this.info = info);

  }


  ngOnInit() {
    this.serviceCourse.findAllCourses()
      .then(courses => this.courses = courses);

    this.service
      .profile()
      .then(couch => this.username = couch.username);
    this.service
      .profile()
      .then(couch => this.email = couch.email);
    this.service
      .profile()
      .then(couch => this._id = couch._id);
  }

}
