import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../../../../services/local-storage/local-storage';

@Component({
  selector: 'tmt-stroop-test-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.scss']
})
export class TutorialDialogComponent {
  constructor(private router: Router,
              private localStorage: LocalStorage) {
  }

  redirectToTmtTest() {
    this.localStorage.set('tmtTutorialDone', JSON.stringify(true));
    this.router.navigate(['tmt/test']).then();
  }

  repeatTutorial() {
    this.router.navigate(['tmt']).then();
  }
}
