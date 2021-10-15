import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormErrors } from '../../types/form-errors';

@Directive()
export abstract class FormField {
  @Input() formControl!: FormControl;
  @Input() label!: string;
  @Input() title!: string;
  formErrors = FormErrors;

  isRequired(): boolean {
    const validator = this.formControl.validator;
    if (!validator) {
      return false;
    }
    const validatorCheck = validator && validator({} as AbstractControl);
    if (!validatorCheck) {
      return false;
    }
    return validatorCheck.required;
  }

  getError(): string | null {
    if (!this.formControl.errors) {
      return null;
    }
    //@ts-ignore
    return this.formErrors[(Object.keys(this.formControl.errors)[0])];
  }
}
