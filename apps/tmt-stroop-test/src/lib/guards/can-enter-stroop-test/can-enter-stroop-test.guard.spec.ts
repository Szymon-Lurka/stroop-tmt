import { TestBed } from '@angular/core/testing';

import { CanEnterStroopTestGuard } from './can-enter-stroop-test.guard';

describe('CanEnterStroopTestGuard', () => {
  let guard: CanEnterStroopTestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanEnterStroopTestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
