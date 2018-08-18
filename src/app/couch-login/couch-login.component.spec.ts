import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchLoginComponent } from './couch-login.component';

describe('CouchLoginComponent', () => {
  let component: CouchLoginComponent;
  let fixture: ComponentFixture<CouchLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
