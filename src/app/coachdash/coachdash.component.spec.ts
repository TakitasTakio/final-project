import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachdashComponent } from './coachdash.component';

describe('CoachdashComponent', () => {
  let component: CoachdashComponent;
  let fixture: ComponentFixture<CoachdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
