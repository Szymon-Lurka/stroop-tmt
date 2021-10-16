import { TestBed } from '@angular/core/testing';

import { HandleStroopStagesService } from './handle-stroop-stages.service';

describe('HandleStroopStagesService', () => {
  let service: HandleStroopStagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleStroopStagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
