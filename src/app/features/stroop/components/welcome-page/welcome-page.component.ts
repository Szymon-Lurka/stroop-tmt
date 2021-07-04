import { Component } from '@angular/core';
import {HandleStroopSteps} from "../../lib/services/handle-stroop-steps/handle-stroop-steps";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  constructor(private handleStroopSteps: HandleStroopSteps) { }

  redirectToTutorial() {
    this.handleStroopSteps.changeCurrentStep('tutorial');
  }

}
