import { Component, OnInit } from '@angular/core';
import {HandleFirstSteps} from "../../lib/services/handle-first-steps/handle-first-steps";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor(private handleFirstSteps: HandleFirstSteps) { }

  goToDemoForm() {
    this.handleFirstSteps.changeCurrentStep('demo');
  }

}
