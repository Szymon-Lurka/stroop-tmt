import {Component, HostListener} from '@angular/core';
import {DataSet} from "../../lib/models/data-set";
import {firstDataSet} from "../../lib/data/first-data-set";
import {HandleUserChoice} from "../../lib/services/handle-user-choice/handle-user-choice";
import {secondDataSet} from "../../lib/data/second-data-set";
import {TmtSecondDataSet} from "../../lib/types/tmt-second-data-set";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tmt-test',
  templateUrl: './tmt-test.component.html',
  styleUrls: ['./tmt-test.component.scss']
})
export class TmtTestComponent {
  currentDataSet: DataSet[] = firstDataSet;
  currentValue = 0;
  isMouseClicked = false;
  isOver = false;
  currentLetter = 'A';
  startTime = -1;

  @HostListener('window:mousedown')
  onMouseDown() {
    this.isMouseClicked = true;
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    if (this.isOver) return;
    this.resetStats();
  }

  constructor(private handleUserChoice: HandleUserChoice,
              private router: Router) {
  }


  checkStyles(value: number | string): string {
    if (typeof value === 'number') {
      if (value <= this.currentValue) {
        return 'green';
      } else {
        return 'black';
      }
    } else {
      // @ts-ignore
      if ((TmtSecondDataSet[value] + 1) <= TmtSecondDataSet[this.currentLetter]) {
        return 'green';
      } else {
        return 'black';
      }
    }
  }


  handleMouseOver(value: number | string) {
    if (!this.isMouseClicked) return;
    if (this.currentDataSet === secondDataSet) {
      this.isOver = false;
      this.handleSecondSetMouseOver(value);
      return;
    } else {
      if (typeof value === 'number') {
        this.handleFirstSetMouseOver(value);
      }
    }
  }

  private handleSecondSetMouseOver(value: number | string) {
    if ((value as number) < this.currentValue) {
      console.log('error');
      return;
    }
    const currentItem = this.currentDataSet.filter((x) => x.value === value);
    // @ts-ignore
    if (this.currentValue === (this.currentDataSet.length / 2) && value === 'G') {
      if (this.startTime < 0) {
        this.startTime = new Date().getTime();
      }
      const clickTime = new Date().getTime();
      const timePassedFromStart = (clickTime - this.startTime) / 1000;
      this.handleUserChoice.saveSecondAnswer({
        value: TmtSecondDataSet[this.currentValue],
        distance: this.currentDataSet[this.currentDataSet.length - 1].distance,
        reactionTime: timePassedFromStart
      })
      this.handleUserChoice.saveSecondToLocalStorage();
      this.router.navigate(['/thank-you']).then();
    }

    if (typeof value === 'string') {
      if (value === TmtSecondDataSet[this.currentValue]) {
        // @ts-ignore
        if (TmtSecondDataSet[value] < TmtSecondDataSet[this.currentLetter]) {
          return;
        }
        if (this.startTime < 0) {
          this.startTime = new Date().getTime();
        }
        const clickTime = new Date().getTime();
        const timePassedFromStart = (clickTime - this.startTime) / 1000;
        this.startTime = clickTime;

        if (TmtSecondDataSet[this.currentValue + 1] === undefined) {
          this.currentLetter = TmtSecondDataSet[this.currentValue];
        } else {
          this.currentLetter = TmtSecondDataSet[this.currentValue + 1];
        }
        console.log(this.currentDataSet[this.currentValue]);
        this.handleUserChoice.saveSecondAnswer({
          value: TmtSecondDataSet[this.currentValue],
          distance: currentItem[0].distance,
          reactionTime: timePassedFromStart,
        })
      }
    }

    if (typeof value === 'number') {
      if (value - this.currentValue === 1) {
        if (!(this.currentLetter === TmtSecondDataSet[value as number])) return;
        if (this.startTime < 0) {
          this.startTime = new Date().getTime();
        }
        const clickTime = new Date().getTime();
        const timePassedFromStart = (clickTime - this.startTime) / 1000;
        this.startTime = clickTime;

        this.handleUserChoice.saveSecondAnswer({
          value: this.currentValue + 1,
          distance: currentItem[0].distance,
          reactionTime: timePassedFromStart,
        })
        this.currentValue++;
      }
    }
  }

  private handleFirstSetMouseOver(value: number) {
    const currentItem = this.currentDataSet.filter((x) => x.value === value);
    if (value - this.currentValue === 1) {
      if (this.startTime < 0) {
        this.startTime = new Date().getTime();
      }
      const clickTime = new Date().getTime();
      const timePassedFromStart = (clickTime - this.startTime) / 1000;
      this.startTime = clickTime;

      this.currentValue++;
      this.handleUserChoice.saveAnswer({
        value: this.currentValue,
        distance: currentItem[0].distance,
        reactionTime: timePassedFromStart,
      })
    }
    if (this.currentDataSet.length - this.currentValue === 0) {
      this.isOver = true;
      this.handleUserChoice.saveToLocalStorage();
      this.currentDataSet = secondDataSet;
      this.resetStats();
    }
  }

  private resetStats() {
    this.isMouseClicked = false;
    this.handleUserChoice.resetAnswers();
    this.handleUserChoice.resetSecondAnswers();
    this.currentLetter = 'A';
    this.currentValue = 0;
    this.startTime = -1;
  }
}

