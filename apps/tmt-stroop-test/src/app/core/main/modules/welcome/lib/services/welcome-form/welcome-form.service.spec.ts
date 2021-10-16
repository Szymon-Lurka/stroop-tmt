import { TestBed } from '@angular/core/testing';

import { WelcomeFormService } from './welcome-form.service';

describe('WelcomeFormService', () => {
  let service: WelcomeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
