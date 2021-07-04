import {Injectable} from '@angular/core';
import {HandleTmtSteps} from "./handle-tmt-steps";
import {TmtSteps} from "../../types/tmt-steps";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class HandleTmtStepsService implements HandleTmtSteps {

  changeCurrentStep(step: TmtSteps) {
    this.currentStep.next(step);
  }

  currentStep = new BehaviorSubject<TmtSteps>('welcome');
}
