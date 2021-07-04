import { TestBed } from '@angular/core/testing';

import { IsStillFirstPageGuard } from './is-still-first-page.guard';

describe('IsStillFirstPageGuard', () => {
  let guard: IsStillFirstPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsStillFirstPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
