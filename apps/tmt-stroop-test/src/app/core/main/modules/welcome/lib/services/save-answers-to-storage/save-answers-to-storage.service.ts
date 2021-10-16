import { Injectable } from '@angular/core';
import { SaveAnswersToStorage } from './save-answers-to-storage';
import { WelcomeForm } from '../welcome-form/welcome-form';
import { AdditionalQuestionsForm } from '../additional-questions-form/additional-questions-form';
import { LocalStorage } from '../../../../../../../../lib/services/local-storage/local-storage';

@Injectable()
export class SaveAnswersToStorageService implements SaveAnswersToStorage {

  constructor(
    private welcomeForm: WelcomeForm,
    private additionalQuestionsForm: AdditionalQuestionsForm,
    private localStorage: LocalStorage
  ) {
  }

  save() {
    this.welcomeForm.age().patchValue(+this.welcomeForm.age().value);
    const numberOfHoursInTopGame = this.welcomeForm.numberOfHoursPerMonthInTopGame();
    const numberOfHoursInMonth = this.welcomeForm.numberOfHoursPerMonth();
    if (numberOfHoursInTopGame.value) {
      numberOfHoursInTopGame.patchValue(+numberOfHoursInTopGame.value);
    }
    if (numberOfHoursInMonth.value) {
      numberOfHoursInMonth.patchValue(+numberOfHoursInMonth.value);
    }

    this.localStorage.set('welcomeForm', JSON.stringify(this.welcomeForm.get().value));
    this.localStorage.set('additionalQuestions', JSON.stringify(this.additionalQuestionsForm.get().value));
    this.localStorage.set('firstStageCompleted', JSON.stringify(true));
  }
}
