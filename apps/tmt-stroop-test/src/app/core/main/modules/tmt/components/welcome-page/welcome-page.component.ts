import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectToNextStageIfDone } from '../../../../../../../lib/services/redirect-to-next-stage-if-done/redirect-to-next-stage-if-done';

@Component({
  selector: 'tmt-stroop-test-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router,
              private redirectToNextStageIfDone: RedirectToNextStageIfDone) {
  }

  redirectToTutorial() {
    this.router.navigate(['tmt/tutorial']).then();
  }

  ngOnInit() {
    this.redirectToNextStageIfDone.redirect('tmt/test', 'tmtTutorialDone');
  }
}
