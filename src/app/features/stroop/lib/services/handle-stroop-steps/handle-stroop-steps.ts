import {Injectable} from "@angular/core";
import {HandleStroopStepsService} from "./handle-stroop-steps.service";
import {BehaviorSubject} from "rxjs";
import {StroopSteps} from "../../types/stroop-steps";

@Injectable({
  providedIn: 'root',
  useClass: HandleStroopStepsService
})
export abstract class HandleStroopSteps {
  abstract currentStep: BehaviorSubject<StroopSteps>;
  abstract changeCurrentStep(step: StroopSteps): void;
}
