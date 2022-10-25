import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Router } from '@angular/router';
import { LogIngService } from './log-in/log-in.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private logIn: LogIngService, private router: Router) {}

  canActivate() {
    if (!this.logIn.isLoggedIn) {
      this.router.navigate(['']);
    }
    return true;
  }
}
