import { TestBed } from '@angular/core/testing';

import { PrepareAdditionalQuestionsService } from './prepare-additional-questions.service';

describe('PrepareAdditionalQuestionsService', () => {
  let service: PrepareAdditionalQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepareAdditionalQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
