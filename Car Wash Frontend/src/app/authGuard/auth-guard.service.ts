import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  private currentUser: User = new User;
  role=""

  constructor(private router: Router, private authenticationService: AuthenticationService ) {
     this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
        var iterator = this.currentUser?.roles?.values();
        this.role=iterator?.next()?.value['role']
    });
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.currentUser) {
      if (route.data['roles']?.indexOf(this.role) === -1) {
        this.router.navigate(['/badcred']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return true;
  }
}
