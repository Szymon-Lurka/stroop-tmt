import { Injectable } from '@angular/core';
import {FirstStepFormApi} from "./first-step-form-api";
import {FirstStepForm} from "../first-step-form/first-step-form";

@Injectable()
export class FirstStepFormApiService implements FirstStepFormApi{

  constructor(private firstStepForm: FirstStepForm) { }

  getNameValue(): string {
    return this.firstStepForm.name().value;
  }
}
