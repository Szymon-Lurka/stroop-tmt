import { Injectable } from '@angular/core';
import { HandleUserChoice } from './handle-user-choice';
import { keyCodeColors, KeyCodeColors } from '../../types/key-code-colors';
import { DataSet } from '../../../../../models/DataSet';
import { Answer } from '../../../../../models/Answer';
import { LocalStorage } from '../../../../../../services/local-storage/local-storage';

@Injectable()
export class HandleUserChoiceService implements HandleUserChoice {
  private readonly answers: Answer[] = [];

  constructor(private localStorage: LocalStorage) {
  }

  handle(keyCode: KeyCodeColors, dataSet: DataSet, currentStage: number, reactionTimeInSeconds: number) {
    const answer: Answer = {
      stage: currentStage,
      data: {
        answer: keyCodeColors[keyCode],
        questionColor: dataSet.color,
        questionText: dataSet.text,
        reactionTime: reactionTimeInSeconds
      }
    };
    this.answers.push(answer);
  }

  saveToLocalStorage() {
    this.localStorage.set('stroopTestAnswers', JSON.stringify(this.answers));
    this.localStorage.set('stroopTestCompleted', JSON.stringify(true));
  }
}
