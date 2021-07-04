import { Component, OnInit } from '@angular/core';
import {HandleTmtSteps} from "../../lib/services/handle-tmt-steps/handle-tmt-steps";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent  {
  constructor(private handleTmtSteps: HandleTmtSteps) {
  }

  changeStep() {
    this.handleTmtSteps.changeCurrentStep('tutorial');
  }
}
