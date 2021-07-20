import {Injectable} from "@angular/core";
import {HandleTmtStepsService} from "./handle-tmt-steps.service";
import {BehaviorSubject} from "rxjs";
import {TmtSteps} from "../../types/tmt-steps";

@Injectable({
  providedIn: 'root',
  useClass: HandleTmtStepsService
})
export abstract class HandleTmtSteps {
  abstract currentStep: BehaviorSubject<TmtSteps>;

  abstract changeCurrentStep(step: TmtSteps): void;
}
