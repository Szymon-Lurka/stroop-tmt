import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tmt-stroop-test-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private router: Router) {
  }

  redirectToTutorial() {
    this.router.navigate(['stroop/tutorial']).then();
  }
}
