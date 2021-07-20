import { Injectable } from '@angular/core';
import {SaveFormToLocalStorage} from "./save-form-to-local-storage";
import {LocalStorage} from "../../../../../../lib/services/local-storage/local-storage";
import {FirstStepForm} from "../first-step-form/first-step-form";

@Injectable()
export class SaveFormToLocalStorageService implements SaveFormToLocalStorage{

  constructor(private localStorage: LocalStorage, private firstStepForm: FirstStepForm) { }

  save() {
    const values = this.firstStepForm.form().value;
    this.localStorage.set('firstStepForm', JSON.stringify(values));
  }
}
