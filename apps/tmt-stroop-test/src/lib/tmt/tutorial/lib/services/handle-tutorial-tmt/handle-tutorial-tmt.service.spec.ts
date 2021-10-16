import { TestBed } from '@angular/core/testing';

import { HandleTutorialTmtService } from './handle-tutorial-tmt.service';

describe('HandleTutorialTmtService', () => {
  let service: HandleTutorialTmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleTutorialTmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
