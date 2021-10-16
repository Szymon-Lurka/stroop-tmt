import { Component, OnInit } from '@angular/core';
import { tutorialStageColors } from '../../lib/data/TutorialStageColors';
import { HandleStroopTutorial } from '../../lib/services/handle-stroop-tutorial/handle-stroop-tutorial';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TutorialDialogComponent } from '../tutorial-dialog/tutorial-dialog.component';

@Component({
  selector: 'tmt-stroop-test-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss']
})
export class TutorialPageComponent implements OnInit {
  tutorialSet = tutorialStageColors;
  currentQuestionIndex = 0;
  isEnd = new Subject();

  constructor(private handleStroopTutorial: HandleStroopTutorial,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.handleStroopTutorial.handle();
    this.handleStroopTutorial.currentQuestionIndex
      .pipe(
        takeUntil(this.isEnd)
      )
      .subscribe((currentQuestionIndex) => {
        if (this.currentQuestionIndex === this.tutorialSet.length - 1) {
          this.markAsEnd();
        } else {
          this.currentQuestionIndex = currentQuestionIndex;
        }
      });
  }

  markAsEnd() {
    this.isEnd.next(true);
    this.isEnd.complete();
    this.matDialog.open(TutorialDialogComponent, {
      disableClose: true
    });
  }
}
