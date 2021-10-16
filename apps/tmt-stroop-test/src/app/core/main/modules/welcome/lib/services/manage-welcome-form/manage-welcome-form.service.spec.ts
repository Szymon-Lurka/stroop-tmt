import { TestBed } from '@angular/core/testing';

import { ManageWelcomeFormService } from './manage-welcome-form.service';

describe('ManageWelcomeFormService', () => {
  let service: ManageWelcomeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageWelcomeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
