import { TestBed } from '@angular/core/testing';

import { AdditionalQuestionsFormService } from './additional-questions-form.service';

describe('AdditionalQuestionsFormService', () => {
  let service: AdditionalQuestionsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalQuestionsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
