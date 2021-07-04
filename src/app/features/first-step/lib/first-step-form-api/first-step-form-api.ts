import {Injectable} from "@angular/core";
import {FirstStepFormApiService} from "./first-step-form-api.service";

@Injectable({
  providedIn: 'root',
  useClass: FirstStepFormApiService
})
export abstract class FirstStepFormApi {
  abstract getNameValue(): string;
}
