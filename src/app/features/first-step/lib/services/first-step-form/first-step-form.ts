import {Injectable} from "@angular/core";
import {FirstStepFormService} from "./first-step-form.service";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root',
  useClass: FirstStepFormService
})
export abstract class FirstStepForm {
  abstract form(): FormGroup;
  abstract name(): FormControl;
  abstract lastName(): FormControl;
  abstract mail(): FormControl;
  abstract firstQuestion(): FormControl;
  abstract secondQuestion(): FormControl;
}
