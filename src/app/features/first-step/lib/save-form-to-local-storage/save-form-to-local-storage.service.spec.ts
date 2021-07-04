import { TestBed } from '@angular/core/testing';

import { SaveFormToLocalStorageService } from './save-form-to-local-storage.service';

describe('SaveFormToLocalStorageService', () => {
  let service: SaveFormToLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveFormToLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
