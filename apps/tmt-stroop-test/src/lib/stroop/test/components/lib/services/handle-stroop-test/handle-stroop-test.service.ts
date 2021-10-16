import { Injectable } from '@angular/core';
import { HandleStroopTest } from './handle-stroop-test';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { firstStageColors } from '../../data/first-stage';
import { HandleUserChoice } from '../handle-user-choice/handle-user-choice';
import { KeyCodeColors } from '../../types/key-code-colors';
import { HandleStroopStages } from '../handle-stroop-stages/handle-stroop-stages';
import { isKeyCodeCorrect } from '../../../../../utils/is-key-code-correct';
import { countTime } from '../../../../../../utils/count-time';
import { DataSet } from '../../../../../lib/models/DataSet/DataSet';

@Injectable()
export class HandleStroopTestService implements HandleStroopTest {
  startTime = -1;
  currentStage = 1;
  currentSet = new BehaviorSubject<DataSet[]>(firstStageColors);
  currentQuestionIndex = new BehaviorSubject<number>(0);
  isLastQuestionHandled = false;

  constructor(private handleUserChoice: HandleUserChoice,
              private handleStroopStages: HandleStroopStages) {
  }

  handle(): void {
    fromEvent(document, 'keyup').subscribe((event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (isKeyCodeCorrect(keyboardEvent.code)) {
        if (this.isTheLastQuestionInSet()) {
          if (!this.isLastQuestionHandled) {
            this.handleLastQuestionInSet();
            this.isLastQuestionHandled = true;
          }
        } else {
          this.handleCurrentQuestion(keyboardEvent.code);
          this.currentQuestionIndex.next(this.currentQuestionIndex.value + 1);
        }
      }
    })
  }

  private countReactionTime() {
    const countedTime = countTime(this.startTime);
    this.startTime = countedTime.clickTime;
    return countedTime.timePassedFromStart;
  }

  private handleLastQuestionInSet() {
    this.handleStroopStages.handleChangeStage();
    this.resetQuestionIndexIfNecessary();
    this.getCurrentSet();
    this.getCurrentStage();
  }

  private isTheLastQuestionInSet() {
    return this.currentQuestionIndex.value === this.currentSet.value.length;
  }

  private getCurrentSet() {
    this.handleStroopStages.currentSet.subscribe((currentSet) => {
      this.currentSet.next(currentSet);
    });
  }

  private getCurrentStage() {
    this.handleStroopStages.currentStage.subscribe((currentStage) => this.currentStage = currentStage);
  }

  private resetQuestionIndexIfNecessary() {
    this.handleStroopStages.isDialogClosed.subscribe((x) => {
      if (x) {
        this.currentQuestionIndex.next(0);
        this.isLastQuestionHandled = false;
      }
    });
  }

  private handleCurrentQuestion(keyCode: string) {
    const currentQuestion = this.currentSet.value[this.currentQuestionIndex.value];
    this.handleUserChoice.handle(keyCode as KeyCodeColors, currentQuestion, this.currentStage, this.countReactionTime());
  }
}
