import { TestBed } from '@angular/core/testing';

import { GoBackGuard } from './go-back.guard';

describe('GoBackGuard', () => {
  let guard: GoBackGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoBackGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
