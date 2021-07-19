import {Component} from '@angular/core';
import {HandleStroopSteps} from "../../lib/services/handle-stroop-steps/handle-stroop-steps";
import {FirstStepFormApi} from "../../../first-step/lib/first-step-form-api/first-step-form-api";
import {LocalStorage} from "../../../../../lib/services/local-storage/local-storage";

@Component({
  selector: 'app-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.scss']
})
export class TutorialDialogComponent {
  constructor(private handleStroopSteps: HandleStroopSteps,
              private localStorage: LocalStorage) {
  }

  redirectToStroopTest() {
    this.localStorage.set('stroopTutorialDone', 'true');
    this.handleStroopSteps.changeCurrentStep('stroopTest');
  }

  repeatTutorial() {
    this.handleStroopSteps.changeCurrentStep('welcome');
  }
}
