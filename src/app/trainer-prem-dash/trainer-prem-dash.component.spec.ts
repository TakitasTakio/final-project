import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPremDashComponent } from './trainer-prem-dash.component';

describe('TrainerPremDashComponent', () => {
  let component: TrainerPremDashComponent;
  let fixture: ComponentFixture<TrainerPremDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerPremDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerPremDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
