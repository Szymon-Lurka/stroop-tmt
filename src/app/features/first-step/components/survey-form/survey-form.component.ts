import { Component } from '@angular/core';
import {FirstStepForm} from "../../lib/services/first-step-form/first-step-form";
import {Router} from "@angular/router";
import {SaveFormToLocalStorage} from "../../lib/services/save-form-to-local-storage/save-form-to-local-storage";

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {
  questionsScale = [1,2,3,4,5,6,7,8,9,10];

  constructor(public firstStepForm: FirstStepForm,
              private router: Router,
              private saveFormToLocalStorage: SaveFormToLocalStorage,
  ) { }

  onSubmit() {
    this.router.navigate(['stroop']).then();
    this.saveFormToLocalStorage.save();
  }
}
