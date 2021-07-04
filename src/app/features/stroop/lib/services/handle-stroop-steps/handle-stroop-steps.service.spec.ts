import { TestBed } from '@angular/core/testing';

import { HandleStroopStepsService } from './handle-stroop-steps.service';

describe('HandleStroopStepsService', () => {
  let service: HandleStroopStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleStroopStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
