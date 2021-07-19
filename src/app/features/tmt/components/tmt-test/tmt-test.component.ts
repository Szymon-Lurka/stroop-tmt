import {Component, HostListener} from '@angular/core';
import {DataSet} from "../../lib/models/data-set";
import {firstDataSet} from "../../lib/data/first-data-set";
import {HandleUserChoice} from "../../lib/services/handle-user-choice/handle-user-choice";
import {secondDataSet} from "../../lib/data/second-data-set";
import {TmtSecondDataSet} from "../../lib/types/tmt-second-data-set";

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

  @HostListener('window:mousedown')
  onMouseDown() {
    this.isMouseClicked = true;
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    if (this.isOver) return;
    this.resetStats();
  }

  constructor(private handleUserChoice: HandleUserChoice) {
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

    if (typeof value === 'string') {
      if (value === TmtSecondDataSet[this.currentValue]) {
        if (TmtSecondDataSet[this.currentValue + 1] === undefined) {
          this.currentLetter = TmtSecondDataSet[this.currentValue];
        } else {
          this.currentLetter = TmtSecondDataSet[this.currentValue + 1];
        }
      }
    }
    if (value as number - this.currentValue === 1) {
      if (!(this.currentLetter === TmtSecondDataSet[value as number])) return;
      this.currentValue++;
    }
  }

  private handleFirstSetMouseOver(value: number) {
    if (value - this.currentValue === 1) {
      this.currentValue++;
      this.handleUserChoice.saveAnswer({
        value: this.currentValue,
        distance: 100,
        reactionTime: 2
      })
    } else {
      this.handleUserChoice.saveError({
        currentValue: this.currentValue,
        reactionTime: 2
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
    this.currentValue = 0;
  }
}
