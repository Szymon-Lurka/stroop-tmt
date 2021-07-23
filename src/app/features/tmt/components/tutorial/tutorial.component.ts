import {Component, HostListener} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TutorialDialogComponent} from "../tutorial-dialog/tutorial-dialog.component";
import {tutorialDataSet} from "../../lib/data/tutorial-data-set";
import {TmtSecondDataSet} from "../../lib/types/tmt-second-data-set";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
  dataSet = tutorialDataSet;
  currentValue = 0;
  isMouseClicked = false;
  isOver = false;
  constructor(private dialog: MatDialog) {
  }

  @HostListener('window:mousedown')
  onMouseDown() {
    this.isMouseClicked = true;
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    if (this.isOver) return;
    this.resetStats();
  }

  openDialog() {
    this.dialog.open(TutorialDialogComponent, {
      disableClose: true
    }).afterClosed().subscribe(() => this.resetStats());
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
      if (typeof value === 'number') {
        this.handleFirstSetMouseOver(value);
    }
  }

  private handleFirstSetMouseOver(value: number) {
    if (value - this.currentValue === 1) {
      this.currentValue++;
    }
    if (this.dataSet.length - this.currentValue === 0) {
      this.isOver = true;
      this.openDialog();
    }
  }

  private resetStats() {
    this.isMouseClicked = false;
    this.currentValue = 0;
  }

}
