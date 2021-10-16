import { Injectable } from '@angular/core';
import { ManageWelcomeForm } from './manage-welcome-form';
import { WelcomeForm } from '../welcome-form/welcome-form';
import { Validators } from '@angular/forms';

@Injectable()
export class ManageWelcomeFormService implements ManageWelcomeForm {

  private gameQuestions = [
    this.welcomeForm.numberOfHoursPerMonth(),
    this.welcomeForm.numberOfHoursPerMonthInTopGame(),
    this.welcomeForm.topPopularGame(),
    this.welcomeForm.futureInGaming(),
    this.welcomeForm.familyAccepts()
  ];

  constructor(private welcomeForm: WelcomeForm) {
  }

  addValidatorsToGameQuestions() {
    this.gameQuestions.forEach((gameQuestion) => {
      gameQuestion.reset();
      gameQuestion.setValidators(Validators.required);
      gameQuestion.updateValueAndValidity();
    });
  }

  removeValidatorsFromGameQuestions() {
    this.gameQuestions.forEach((gameQuestion) => {
      gameQuestion.reset();
      gameQuestion.removeValidators(Validators.required);
      gameQuestion.updateValueAndValidity();
    });
  }
}
