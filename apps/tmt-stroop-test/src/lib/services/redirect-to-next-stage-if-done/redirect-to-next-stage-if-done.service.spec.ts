import { TestBed } from '@angular/core/testing';

import { RedirectToNextStageIfDoneService } from './redirect-to-next-stage-if-done.service';

describe('RedirectToNextStageIfDoneService', () => {
  let service: RedirectToNextStageIfDoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectToNextStageIfDoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
