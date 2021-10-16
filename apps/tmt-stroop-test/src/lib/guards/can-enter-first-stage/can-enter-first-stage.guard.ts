import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorage } from '../../services/local-storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class CanEnterFirstStageGuard implements CanActivate {
  constructor(private localStorage: LocalStorage, private router: Router) {}

    canActivate(): boolean {
      const firstStageCompleted = this.localStorage.get('firstStageCompleted');
      if (firstStageCompleted) {
        this.router.navigate(['stroop']);
        return false;
      } else {
        return true;
      }
  }
}
