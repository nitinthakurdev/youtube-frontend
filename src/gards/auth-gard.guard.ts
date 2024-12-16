import { CanActivateFn } from '@angular/router';

export const authGardGuard: CanActivateFn = (route, state) => {
  return true;
};
