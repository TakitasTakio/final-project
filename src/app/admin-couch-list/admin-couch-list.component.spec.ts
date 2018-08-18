import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCouchListComponent } from './admin-couch-list.component';

describe('AdminCouchListComponent', () => {
  let component: AdminCouchListComponent;
  let fixture: ComponentFixture<AdminCouchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCouchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCouchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
