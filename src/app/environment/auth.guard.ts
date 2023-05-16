import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { LoginService } from "../services/login.service";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return of(loginService.isLoggedIn()).pipe(
    map((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        console.log("i am in user guard");
        
        return true; // Allow access to the route
      } else {
        router.navigate(['login']);
        return false; // Deny access to the route
      }
    }),
    catchError(() => {
      router.navigate(['login']);
      return of(false); // Deny access to the route
    })
  );
};

export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => AuthGuard(route, state);
