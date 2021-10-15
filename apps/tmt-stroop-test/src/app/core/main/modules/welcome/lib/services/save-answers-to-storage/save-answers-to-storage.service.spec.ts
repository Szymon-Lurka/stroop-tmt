import { TestBed } from '@angular/core/testing';

import { SaveAnswersToStorageService } from './save-answers-to-storage.service';

describe('SaveAnswersToStorageService', () => {
  let service: SaveAnswersToStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveAnswersToStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
