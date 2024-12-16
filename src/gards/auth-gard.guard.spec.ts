import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGardGuard } from './auth-gard.guard';

describe('authGardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
