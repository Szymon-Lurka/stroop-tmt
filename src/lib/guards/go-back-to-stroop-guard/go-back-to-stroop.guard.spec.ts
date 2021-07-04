import { TestBed } from '@angular/core/testing';

import { GoBackToStroopGuard } from './go-back-to-stroop.guard';

describe('GoBackToStroopGuard', () => {
  let guard: GoBackToStroopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoBackToStroopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
