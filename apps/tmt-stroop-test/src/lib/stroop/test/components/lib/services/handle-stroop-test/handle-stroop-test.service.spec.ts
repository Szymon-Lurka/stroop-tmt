import { TestBed } from '@angular/core/testing';

import { HandleStroopTestService } from './handle-stroop-test.service';

describe('HandleStroopTestService', () => {
  let service: HandleStroopTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleStroopTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
