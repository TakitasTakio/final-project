import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCsSetComponent } from './admin-cs-set.component';

describe('AdminCsSetComponent', () => {
  let component: AdminCsSetComponent;
  let fixture: ComponentFixture<AdminCsSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCsSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
