import { TestBed } from '@angular/core/testing';

import { CanEnterTmtTestGuard } from './can-enter-tmt-test.guard';

describe('CanEnterTmtTestGuard', () => {
  let guard: CanEnterTmtTestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanEnterTmtTestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
