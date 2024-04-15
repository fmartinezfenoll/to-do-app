import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserService } from '../services/user.service';
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const userService = inject(UserService);
  console.log('Guard!');
  if (userService.isAuth()) {
    console.log(`Accediendo a home`);
    return true;
  } else {
    console.log('Saltando al login...');
    router.navigateByUrl('/login');
    return false;
  }
};
