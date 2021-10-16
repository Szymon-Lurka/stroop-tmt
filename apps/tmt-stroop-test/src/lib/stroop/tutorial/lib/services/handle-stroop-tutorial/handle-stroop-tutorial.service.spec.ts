import { TestBed } from '@angular/core/testing';

import { HandleStroopTutorialService } from './handle-stroop-tutorial.service';

describe('HandleStroopTutorialService', () => {
  let service: HandleStroopTutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleStroopTutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
