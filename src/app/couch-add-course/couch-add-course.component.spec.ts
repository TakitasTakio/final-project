import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchAddCourseComponent } from './couch-add-course.component';

describe('CouchAddCourseComponent', () => {
  let component: CouchAddCourseComponent;
  let fixture: ComponentFixture<CouchAddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchAddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
