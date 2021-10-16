import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tmt-stroop-test-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent {
  constructor(private router: Router) {
  }

  navigateToDemoDataForm() {
    this.router.navigate(['/demographics-data']).then();
  }
}
