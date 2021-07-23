import { TestBed } from '@angular/core/testing';

import { FirstStepFormService } from './first-step-form.service';

describe('FirstStepFormService', () => {
  let service: FirstStepFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstStepFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
