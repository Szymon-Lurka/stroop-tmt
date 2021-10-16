import { Injectable } from '@angular/core';
import { HandleUserChoice } from './handle-user-choice';
import { Answer } from '../../models/answer';
import { TMTError } from '../../models/error';
import { LocalStorage } from '../../../../../services/local-storage/local-storage';

@Injectable()
export class HandleUserChoiceService implements HandleUserChoice {

  private answers: Answer[] = [];
  private secondAnswers: Answer[] = [];
  private readonly errors: TMTError[] = [];
  private readonly secondErrors: TMTError[] = [];

  constructor(
    private localStorage: LocalStorage
  ) {
  }

  saveAnswer(answer: Answer): void {
    this.answers.push(answer);
  }

  saveError(error: TMTError): void {
    this.errors.push(error);
  }

  saveSecondError(error: TMTError): void {
    this.secondErrors.push(error);
  }

  saveToLocalStorage(): void {
    this.localStorage.set('tmtAnswer', JSON.stringify(this.answers));
    this.localStorage.set('tmtErrors', JSON.stringify(this.errors));
    this.localStorage.set('tmtFirstStageDone', JSON.stringify(true));
  }

  saveSecondToLocalStorage(): void {
    this.localStorage.set('tmtSecondAnswers', JSON.stringify(this.secondAnswers));
    this.localStorage.set('tmtSecondErrors', JSON.stringify(this.secondErrors));
    this.localStorage.set('tmtTestCompleted', JSON.stringify(true));
  }

  resetAnswers() {
    this.answers = [];
  }

  saveSecondAnswer(answer: Answer) {
    this.secondAnswers.push(answer);
  }

  resetSecondAnswers() {
    this.answers = [];
  }
}
