import { Component, OnInit } from '@angular/core';
import {TrainerLoginServiceUser} from '../services/trainer.login.service.user';
import {Router} from '@angular/router';
import {CourseServiceUser} from '../services/admin.cs.set.service';
import {Course} from '../models/course.model';
import {UnitServiceUser} from '../services/admin.unit.set.service';
import {LessonServiceUser} from '../services/admin.lesson.set.service';
import {MeetingServiceUser} from '../services/admin.meeting.set.service';
import {Info2ServiceUser} from '../services/info2.service.user';
import {MatchServiceUser} from '../services/match.service.user';

@Component({
  selector: 'app-trainer-prem-dash',
  templateUrl: './trainer-prem-dash.component.html',
  styleUrls: ['./trainer-prem-dash.component.css']
})
export class TrainerPremDashComponent implements OnInit {

  constructor(private service: TrainerLoginServiceUser,
              private router: Router,
              private serviceCourse: CourseServiceUser,
              private serviceUnit: UnitServiceUser,
              private serviceLesson: LessonServiceUser,
              private serviceMeeting: MeetingServiceUser,
              private serviceII: Info2ServiceUser,
              private serviceMatch: MatchServiceUser) { }

  selectedCourseId = 0;
  selectedUnitId = 0;
  selectedLessonId = 0;
  selectedCouchId = 0;
  selectedMeetingId = 0;
  courses: Course[] = [ ];
  units = [];
  info2 = {};
  couchs = [];
  meetings = [];
  unitTitle = '';
  lessonTitle = '';
  lessons = [];
  matchs = [];
  unitId = '';
  username;
  email;
  _id;
  courseId = '';
  meetingId = '';

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['trainerlogin']));
  }

  clickCouch(couchId) {
    this.selectedCouchId = couchId;

    this.serviceII.findInfo2ByCouch(couchId)
      .then(info2 => this.info2 = info2);

  }
  loadInfo2(couchId) {
    this.selectedCouchId = couchId;
    this.serviceII.findInfo2ByCouch(couchId)
      .then(info2 => this.info2 = info2);

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

  loadMatch(meetingId) {
    this.selectedMeetingId = meetingId;
    this.serviceMatch.findMatchByMeeting(meetingId)
      .then(matchs => this.matchs = matchs);
  }

  createMatch(meeting, couch, user) {
    this.selectedMeetingId = meeting;
    this.serviceMatch.createMatch(meeting, couch, user)
      .then(() => {
        this.loadMatch(meeting);

      });


  }

  deleteMatch(meetingId, matchId) {
    this.selectedMeetingId = meetingId;
    this.serviceMatch.deleteMatch(meetingId, matchId)
      .then( () => {
        this.loadMatch(meetingId);
      });
  }

  ngOnInit() {
    this.serviceCourse.findAllCourses()
      .then(courses => this.courses = courses);
    this.service
      .profile()
      .then(user => this.username = user.username);
    this.service
      .profile()
      .then(user => this.email = user.email);
    this.service
      .profile()
      .then(user => this._id = user._id);
  }

}
