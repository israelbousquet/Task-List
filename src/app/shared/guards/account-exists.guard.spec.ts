import { TestBed } from '@angular/core/testing';

import { AccountExistsGuard } from './account-exists.guard';

describe('AccountExistsGuard', () => {
  let guard: AccountExistsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccountExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
