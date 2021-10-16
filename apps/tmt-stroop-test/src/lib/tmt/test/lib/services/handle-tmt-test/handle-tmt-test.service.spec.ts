import { TestBed } from '@angular/core/testing';

import { HandleTmtTestService } from './handle-tmt-test.service';

describe('HandleTmtTestService', () => {
  let service: HandleTmtTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleTmtTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
