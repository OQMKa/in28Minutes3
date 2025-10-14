import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
// import { CanActivate } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class RouteGuardService implements CanActivateFn  {
//   constructor() {
//     // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
//     }
// }

export const routeGuard: CanActivateFn = (route, state) => {

  const authService = inject(HardcodedAuthenticationService);
  const router = inject(Router);

  if (authService.isUserLoggedIn()) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};



