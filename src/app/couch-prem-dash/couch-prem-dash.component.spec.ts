import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchPremDashComponent } from './couch-prem-dash.component';

describe('CouchPremDashComponent', () => {
  let component: CouchPremDashComponent;
  let fixture: ComponentFixture<CouchPremDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchPremDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchPremDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
