import { Injectable } from '@angular/core';
import { RedirectToNextStageIfDone } from './redirect-to-next-stage-if-done';
import { Router } from '@angular/router';
import { LocalStorage } from '../local-storage/local-storage';

@Injectable()
export class RedirectToNextStageIfDoneService implements RedirectToNextStageIfDone {

  constructor(private router: Router, private localStorage: LocalStorage) {
  }

  redirect(route: string, key: string) {
    if (this.localStorage.get(key)) {
      this.router.navigate([route]).then();
    }
  }
}
