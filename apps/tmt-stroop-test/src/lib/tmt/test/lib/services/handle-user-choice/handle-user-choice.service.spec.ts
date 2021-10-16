import { TestBed } from '@angular/core/testing';

import { HandleUserChoiceService } from './handle-user-choice.service';

describe('HandleUserChoiceService', () => {
  let service: HandleUserChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleUserChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
