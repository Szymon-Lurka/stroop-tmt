import {Injectable} from '@angular/core';
import {HandleUserChoice} from "./handle-user-choice";
import {KeyCodeColors as KeyCodeColorsEnum, keyCodeColors} from "../../types/key-code-colors";
import {DataSet} from "../../models/data-set";
import {Answer} from "../../models/answer";
import {LocalStorage} from "../../../../../../lib/services/local-storage/local-storage";

@Injectable()
export class HandleUserChoiceService implements HandleUserChoice {
  private readonly answers: Answer[] = [];

  constructor(private localStorage: LocalStorage) {
  }

  handle(keyCode: KeyCodeColorsEnum, dataSet: DataSet, currentStage: number, reactionTimeInSeconds: number) {
    const answer: Answer = {
      stage: currentStage,
      data: {
        answer: keyCodeColors[keyCode],
        questionColor: dataSet.color,
        questionText: dataSet.text,
        reactionTime: reactionTimeInSeconds,
      }
    };
    this.answers.push(answer);
  }

  saveToLocalStorage() {
    this.localStorage.set('stroopTestAnswers', JSON.stringify(this.answers));
  }
}
