import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tmt-stroop-test-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.scss']
})
export class TutorialDialogComponent {

  constructor(private router: Router) {
  }


  redirectToStroopTest() {
    this.router.navigate(['stroop/test']).then();
  }

  repeatTutorial() {
    this.router.navigate(['stroop']).then();
  }

}
