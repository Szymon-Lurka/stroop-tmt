import { Injectable } from '@angular/core';
import { HandleTmtTest } from './handle-tmt-test';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { DataSet } from '../../../../lib/models/DataSet';
import { firstDataSet } from '../../data/first-data-set';
import { secondDataSet } from '../../data/second-data-set';
import { HandleUserChoice } from '../handle-user-choice/handle-user-choice';
import { Answer } from '../../models/answer';
import { countTime } from '../../../../../utils/count-time';
import { TmtSecondDataSet } from '../../../../tutorial/lib/types/TmtDataSet';
import { Router } from '@angular/router';
import { SendData } from '../../../../../services/send-data/send-data';

@Injectable()
export class HandleTmtTestService implements HandleTmtTest {
  currentDataSet = new BehaviorSubject<DataSet[]>(firstDataSet);
  currentValue = new BehaviorSubject<number>(0);
  currentLetter = new BehaviorSubject<string>('A');
  isMouseClicked = false;
  isOver = false;
  startTime = -1;
  searchingForNumber = false;

  constructor(private handleUserChoice: HandleUserChoice,
              private router: Router,
              private sendData: SendData) {
  }

  handle(isFirstStageCompleted: boolean) {
    if (isFirstStageCompleted) {
      this.goToSecondStage();
    }
    fromEvent(window, 'mousedown').subscribe(() => {
      this.isMouseClicked = true;
    });
    fromEvent(window, 'mouseup').subscribe(() => {
      if (this.isOver) return;
      this.resetStats();
    });
  }

  handleMouseOver(value: number | string) {
    if (!this.isMouseClicked) return;
    if (this.currentDataSet.value === secondDataSet) {
      this.isOver = false;
      this.handleSecondSetMouseOver(value);
      return;
    } else {
      if (typeof value === 'number') {
        this.handleFirstSetMouseOver(value);
      }
    }
  }


  private handleFirstSetMouseOver(value: number) {
    const currentItem = this.currentDataSet.value.filter((dataSet) => dataSet.value === value);
    const timePassedFromStart = this.countReactionTime();
    if (this.isErrorInFirstDataSet(value)) {
      this.handleUserChoice.saveError({
        currentValue: this.currentValue.value,
        reactionTime: timePassedFromStart
      });
    }
    if (this.isCorrectNextNumber(value)) {
      this.currentValue.next(this.currentValue.value + 1);
      this.saveAnswer({
        value: this.currentValue.value,
        distance: currentItem[0].distance,
        reactionTime: timePassedFromStart
      });
    }
    if (this.isLastInFirstDataSet()) {
      this.isOver = true;
      this.handleUserChoice.saveToLocalStorage();
      this.currentDataSet.next(secondDataSet);
      this.resetStats();
    }
  }

  private countReactionTime() {
    const countedTime = countTime(this.startTime);
    this.startTime = countedTime.clickTime;
    return countedTime.timePassedFromStart;
  }

  private handleSecondSetMouseOver(value: number | string) {
    if(this.isLastElement(value)) {
      this.handleSecondStageLastElement();
    }
    if (typeof value === 'number') {
      this.handleSecondStageNumberValue(value);
    } else {
      this.handleSecondStageStringValue(value);
    }
  }

  private resetStats() {
    this.isMouseClicked = false;
    this.startTime = -1;
    this.handleUserChoice.resetAnswers();
    this.handleUserChoice.resetSecondAnswers();
    this.currentValue.next(0);
    this.currentLetter.next('A');
  }

  private handleSecondStageNumberValue(value: number) {
    const currentItem = this.currentDataSet.value.filter((data) => data.value === value);
    const timePassedFromStart = this.countReactionTime();
    if (this.isSecondStageNumberError(value)) {
      this.handleUserChoice.saveSecondError({
        currentValue: this.currentValue.value,
        reactionTime: timePassedFromStart
      });
      return;
    }
    if (this.isCorrectNextNumber(value)) {
      if (!(this.currentLetter.value === TmtSecondDataSet[value as number])) {
        this.handleUserChoice.saveSecondError({
          currentValue: TmtSecondDataSet[this.currentValue.value],
          reactionTime: timePassedFromStart
        });
        return;
      };
      this.handleUserChoice.saveSecondAnswer({
        value: this.currentValue.value + 1,
        distance: currentItem[0].distance,
        reactionTime: timePassedFromStart
      });
      this.currentValue.next(this.currentValue.value + 1);
      this.searchingForNumber = false;
    }
  }

  private handleSecondStageStringValue(value: string) {
    const currentItem = this.currentDataSet.value.filter((data) => data.value === value);
    const timePassedFromStart = this.countReactionTime();
    if (value.charCodeAt(0) < (this.currentLetter.value).charCodeAt(0) || (value.charCodeAt(0) - (this.currentLetter.value.charCodeAt(0) - 1) > 0) && this.searchingForNumber) {
      this.handleUserChoice.saveSecondError({
        currentValue: TmtSecondDataSet[this.currentValue.value],
        reactionTime: timePassedFromStart
      });
      return;
    }
    if (value === TmtSecondDataSet[this.currentValue.value]) {
      if (TmtSecondDataSet[this.currentValue.value + 1] === undefined) {
        this.currentLetter.next(TmtSecondDataSet[this.currentValue.value]);
      } else {
        this.currentLetter.next(TmtSecondDataSet[this.currentValue.value + 1]);
      }
      this.handleUserChoice.saveSecondAnswer({
        value: TmtSecondDataSet[this.currentValue.value],
        distance: currentItem[0].distance,
        reactionTime: timePassedFromStart
      });
      this.searchingForNumber = true;
    }
  }

  private saveAnswer(answer: Answer) {
    this.handleUserChoice.saveAnswer(answer);
  };

  private isCorrectNextNumber(value: number) {
    return value - this.currentValue.value === 1;
  }

  private isLastInFirstDataSet() {
    return this.currentDataSet.value.length - this.currentValue.value === 0;
  }

  private isErrorInFirstDataSet(value: number) {
    return value < this.currentValue.value || value - this.currentValue.value > 1;
  }

  private isLastElement(value: string | number) {
    return this.currentValue.value === ((this.currentDataSet.value.length / 2)) && value === 'M'
  }

  private handleSecondStageLastElement() {
    const timePassedFromStart = this.countReactionTime();
    this.handleUserChoice.saveSecondAnswer({
      value: 'M',
      distance: this.currentDataSet.value[this.currentDataSet.value.length - 1].distance,
      reactionTime: timePassedFromStart
    });
    this.handleUserChoice.saveSecondToLocalStorage();
    this.sendData.send();
    this.router.navigate(['thank-you']).then();
  }

  private isSecondStageNumberError(value: number) {
    return value < this.currentValue.value || value - this.currentValue.value >= 2
  }

  private goToSecondStage() {
    this.currentDataSet.next(secondDataSet);
  }
}
