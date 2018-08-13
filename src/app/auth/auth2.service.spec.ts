import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Auth2Service } from './auth2.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Auth2Service,
        {
          provide: Router, useValue: { navigate: () => {} }
        }]
    });
  });

  it('should ...', inject([Auth2Service], (service: Auth2Service) => {
    expect(service).toBeTruthy();
  }));
});
