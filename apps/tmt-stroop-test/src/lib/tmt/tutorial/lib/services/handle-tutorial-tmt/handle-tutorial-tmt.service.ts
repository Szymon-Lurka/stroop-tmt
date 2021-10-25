import { Injectable } from '@angular/core';
import { HandleTutorialTmt } from './handle-tutorial-tmt';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { tutorialDataSet } from '../../data/TutorialDataSet';
import { MatDialog } from '@angular/material/dialog';
import { TutorialDialogComponent } from '../../../components/tutorial-dialog/tutorial-dialog.component';

@Injectable()
export class HandleTutorialTmtService implements HandleTutorialTmt {
  constructor(private matDialog: MatDialog) {
  }

  currentValue = new BehaviorSubject<number>(0);
  isOver = false;
  dataSet = tutorialDataSet;
  isMouseClicked = false;

  handle(): void {
    this.resetStats();
    this.isOver = false;
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
    if (typeof value === 'number') {
      this.handleFirstSetMouseOver(value);
    }
  }

  private handleFirstSetMouseOver(value: number) {
    if (value - this.currentValue.value === 1) {
      this.currentValue.next(this.currentValue.value + 1);
    }
    if (this.dataSet.length - this.currentValue.value === 0) {
      this.isOver = true;
      this.openDialog();
    }
  }

  private resetStats() {
    this.isMouseClicked = false;
    this.currentValue.next(0);
  }

  private openDialog() {
    this.matDialog.open(TutorialDialogComponent, {
      disableClose: true
    });
  }



}
