import { TestBed } from '@angular/core/testing';

import { CuponLandingService } from './cupon-landing.service';

describe('CuponLandingService', () => {
  let service: CuponLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuponLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
