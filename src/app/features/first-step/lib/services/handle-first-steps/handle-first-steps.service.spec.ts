import { TestBed } from '@angular/core/testing';

import { HandleFirstStepsService } from './handle-first-steps.service';

describe('FirstStepFormApiService', () => {
  let service: HandleFirstStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleFirstStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
