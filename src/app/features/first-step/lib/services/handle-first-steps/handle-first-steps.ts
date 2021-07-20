import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {FirstSteps} from "../../types/first-steps";
import {HandleFirstStepsService} from "./handle-first-steps.service";

@Injectable({
  providedIn: 'root',
  useClass: HandleFirstStepsService
})
export abstract class HandleFirstSteps {
  abstract currentStep: BehaviorSubject<FirstSteps>;
  abstract changeCurrentStep(step: FirstSteps): void;
}
