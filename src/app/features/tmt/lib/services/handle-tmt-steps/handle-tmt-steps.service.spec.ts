import { TestBed } from '@angular/core/testing';

import { HandleTmtStepsService } from './handle-tmt-steps.service';

describe('HandleTmtStepsService', () => {
  let service: HandleTmtStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleTmtStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
