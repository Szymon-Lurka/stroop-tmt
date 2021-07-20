import { Injectable } from '@angular/core';
import {HandleFirstSteps} from "./handle-first-steps";
import {BehaviorSubject} from "rxjs";
import {FirstSteps} from "../../types/first-steps";

@Injectable()
export class HandleFirstStepsService implements HandleFirstSteps {

  currentStep = new BehaviorSubject<FirstSteps>('start');

  changeCurrentStep(step: FirstSteps) {
    this.currentStep.next(step);
  }

}
