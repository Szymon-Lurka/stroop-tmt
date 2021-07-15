import {Component, HostListener} from '@angular/core';
import {HandleStroopSteps} from "../../lib/services/handle-stroop-steps/handle-stroop-steps";
import {MatDialog} from "@angular/material/dialog";
import {TutorialDialogComponent} from "../tutorial-dialog/tutorial-dialog.component";
import {tutorialStageColors} from "../../lib/data/tutorial-stage-colors";

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss']
})
export class TutorialPageComponent {
  tutorialSet = tutorialStageColors;
  currentQuestionIndex = 0;
  isEnd = false;

  @HostListener('window:keyup', ['$event'])
  onClick(key: KeyboardEvent) {
    if (this.isKeyCodeIsCorrect(key.code)) {
      if (this.isEnd) return;
      ++this.currentQuestionIndex;
      if (this.currentQuestionIndex === this.tutorialSet.length - 1) {
        this.openDialog();
        this.isEnd = true;
      }
    }
  }

  constructor(
    private handleStroopSteps: HandleStroopSteps,
    private dialog: MatDialog) {
  }

  changeStep() {
    this.handleStroopSteps.changeCurrentStep('stroopTest');
  }

  openDialog() {
    this.dialog.open(TutorialDialogComponent, {
      disableClose: true
    })
  }

  private isKeyCodeIsCorrect(keyCode: string) {
    return keyCode === 'KeyS' || keyCode === 'KeyA' || keyCode === 'KeyK' || keyCode === 'KeyL';
  }

}
