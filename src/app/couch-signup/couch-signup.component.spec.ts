import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchSignupComponent } from './couch-signup.component';

describe('CouchSignupComponent', () => {
  let component: CouchSignupComponent;
  let fixture: ComponentFixture<CouchSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
