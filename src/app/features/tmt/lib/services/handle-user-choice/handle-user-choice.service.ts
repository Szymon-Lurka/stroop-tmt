import { Injectable } from '@angular/core';
import {HandleUserChoice} from "./handle-user-choice";
import {Answer} from "../../models/answer";
import {ErrorModel} from "../../models/error.model";
import {LocalStorage} from "../../../../../../lib/services/local-storage/local-storage";

@Injectable()
export class HandleUserChoiceService implements HandleUserChoice {
  private answers: Answer[] = [];
  private readonly errors: ErrorModel[] = [];

  constructor(
    private localStorage: LocalStorage
  ) { }

  saveAnswer(answer: Answer): void {
    this.answers.push(answer);
  }

  saveError(error: ErrorModel): void {
    this.errors.push(error);
  }

  saveToLocalStorage(): void {
    this.localStorage.set('tmtAnswer', JSON.stringify(this.answers));
    this.localStorage.set('tmtErrors', JSON.stringify(this.errors));
  }

  resetAnswers() {
    this.answers = [];
  }
}
