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
    this.welcomeForm.topPopularGameCustom(),
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

  addValidatorToTopPopularGameCustom() {
    this.gameQuestions[3].reset();
    this.gameQuestions[3].setValidators(Validators.required);
    this.gameQuestions[3].updateValueAndValidity();
  }

  removeValidatorFromTopPopularGameCustom () {
      this.gameQuestions[3].reset();
      this.gameQuestions[3].removeValidators(Validators.required);
      this.gameQuestions[3].updateValueAndValidity();
  }


  
}
