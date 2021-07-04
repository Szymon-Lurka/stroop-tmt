import { Component } from '@angular/core';
import {FirstStepForm} from "../../lib/first-step-form/first-step-form";
import {Router} from "@angular/router";
import {SaveFormToLocalStorage} from "../../lib/save-form-to-local-storage/save-form-to-local-storage";

@Component({
  selector: 'app-main',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent  {
  questionsScale = [1,2,3,4,5,6,7,8,9,10];

  constructor(
    public firstStepForm: FirstStepForm,
    private router: Router,
    private saveFormToLocalStorage: SaveFormToLocalStorage) { }

  onSubmit() {
    this.saveFormToLocalStorage.save();
    this.router.navigate(['stroop']).then();
  }
  test() {
    console.log(this.firstStepForm.form().value);
  }

}
