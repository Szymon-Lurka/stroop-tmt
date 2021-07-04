import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalStorage} from "../../services/local-storage/local-storage";

@Injectable({
  providedIn: 'root'
})
export class GoBackToStroopGuard implements CanActivate {
  constructor(private localStorage: LocalStorage, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localStorage.get('isStroopDone')) {
      this.router.navigate(['tmt']);
      return false
    } else {
      return true;
    }
  }

}
