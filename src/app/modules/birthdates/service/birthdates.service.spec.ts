import { TestBed } from '@angular/core/testing';

import { BirthdatesService } from './birthdates.service';

describe('BirthdatesService', () => {
  let service: BirthdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
