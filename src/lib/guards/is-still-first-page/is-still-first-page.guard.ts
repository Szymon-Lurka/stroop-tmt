import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalStorage} from "../../services/local-storage/local-storage";

@Injectable({
  providedIn: 'root'
})
export class IsStillFirstPageGuard implements CanActivateChild {
  constructor(private localStorage: LocalStorage, private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localStorage.get('firstStepForm')) {
      return true;
    } else {
      this.router.navigate(['']).then();
      return false;
    }
  }

}
