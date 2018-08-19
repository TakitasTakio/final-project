import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAddCourseComponent } from './trainer-add-course.component';

describe('TrainerAddCourseComponent', () => {
  let component: TrainerAddCourseComponent;
  let fixture: ComponentFixture<TrainerAddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerAddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
