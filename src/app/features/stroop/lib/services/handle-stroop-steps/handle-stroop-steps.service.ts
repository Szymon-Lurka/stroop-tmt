import { Injectable } from '@angular/core';
import {HandleStroopSteps} from "./handle-stroop-steps";
import {BehaviorSubject} from "rxjs";
import {StroopSteps} from "../../types/stroop-steps";

@Injectable()
export class HandleStroopStepsService implements HandleStroopSteps{

  currentStep = new BehaviorSubject<StroopSteps>('welcome');

  changeCurrentStep(step: StroopSteps) {
    this.currentStep.next(step);
  }
}
