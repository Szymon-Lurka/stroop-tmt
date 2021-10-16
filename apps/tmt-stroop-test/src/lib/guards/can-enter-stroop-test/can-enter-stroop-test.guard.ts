import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorage } from '../../services/local-storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class CanEnterStroopTestGuard implements CanActivate {
  constructor(private localStorage: LocalStorage, private router: Router) {}

  canActivate(): boolean {
    const stroopTestCompleted = this.localStorage.get('stroopTestCompleted');
    const isFirstStageCompleted = this.localStorage.get('firstStageCompleted');
    if (stroopTestCompleted) {
      this.router.navigate(['tmt']);
      return false;
    } else if(!isFirstStageCompleted) {
      this.router.navigate(['welcome']);
      return false;
    }
    return true;
  }

}
