import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListForViewComponent } from './user-list-for-view.component';

describe('UserListForViewComponent', () => {
  let component: UserListForViewComponent;
  let fixture: ComponentFixture<UserListForViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListForViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListForViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
