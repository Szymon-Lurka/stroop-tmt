import { TestBed } from '@angular/core/testing';

import { FirstStepFormApiService } from './first-step-form-api.service';

describe('FirstStepFormApiService', () => {
  let service: FirstStepFormApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstStepFormApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
