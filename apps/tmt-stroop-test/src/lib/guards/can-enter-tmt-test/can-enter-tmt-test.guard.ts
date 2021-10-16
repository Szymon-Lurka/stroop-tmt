import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorage } from '../../services/local-storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class CanEnterTmtTestGuard implements CanActivate {
  constructor(private localStorage: LocalStorage, private router: Router) {}

  canActivate(): boolean {
    const tmtTestCompleted = this.localStorage.get('tmtTestCompleted');
    const stroopTestCompleted = this.localStorage.get('stroopTestCompleted');
    if (tmtTestCompleted) {
      this.router.navigate(['thank-you']);
      return false;
    } else if(!stroopTestCompleted) {
      this.router.navigate(['stroop']);
      return false;
    }
    return true;
  }

}
