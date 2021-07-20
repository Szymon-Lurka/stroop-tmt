import { Component } from '@angular/core';
import {FirstStepForm} from "../../lib/services/first-step-form/first-step-form";
import {Router} from "@angular/router";
import {SaveFormToLocalStorage} from "../../lib/services/save-form-to-local-storage/save-form-to-local-storage";
import {HandleFirstSteps} from "../../lib/services/handle-first-steps/handle-first-steps";

@Component({
  selector: 'app-demo-data-form',
  templateUrl: './demo-data-form.component.html',
  styleUrls: ['./demo-data-form.component.css']
})
export class DemoDataFormComponent {

  constructor(public firstStepForm: FirstStepForm,
              private handleFirstSteps: HandleFirstSteps
  ) { }

  onSubmit() {
    this.handleFirstSteps.changeCurrentStep('survey');
  }
}
