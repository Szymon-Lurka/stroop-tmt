import { Injectable } from '@angular/core';
import {FirstStepForm} from "./first-step-form";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable()
export class FirstStepFormService implements FirstStepForm {

  private readonly _formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    first: new FormControl(),
    second: new FormControl()
  })

  constructor() { }
  form(): FormGroup {
    return this._formGroup;
  }
  firstQuestion(): FormControl {
    return this._formGroup.get('first') as FormControl;
  }
  lastName(): FormControl {
    return this._formGroup.get('lastName') as FormControl;

  }
  mail(): FormControl {
    return this._formGroup.get('mail') as FormControl;

  }
  name(): FormControl {
    return this._formGroup.get('name') as FormControl;

  }
  secondQuestion(): FormControl {
    return this._formGroup.get('second') as FormControl;

  }
}
