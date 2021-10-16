import { TestBed } from '@angular/core/testing';

import { CanEnterFirstStageGuard } from './can-enter-first-stage.guard';

describe('CanEnterFirstStageGuard', () => {
  let guard: CanEnterFirstStageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanEnterFirstStageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
