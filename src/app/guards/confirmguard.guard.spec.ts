import { TestBed } from '@angular/core/testing';

import { ConfirmguardGuard } from './confirmguard.guard';

describe('ConfirmguardGuard', () => {
  let guard: ConfirmguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
