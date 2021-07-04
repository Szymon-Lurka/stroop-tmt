import { Component } from '@angular/core';
import {HandleStroopSteps} from "../../lib/services/handle-stroop-steps/handle-stroop-steps";
import {MatDialog} from "@angular/material/dialog";
import {TutorialDialogComponent} from "../tutorial-dialog/tutorial-dialog.component";

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss']
})
export class TutorialPageComponent {

  constructor(
    private handleStroopSteps: HandleStroopSteps,
    private dialog: MatDialog) { }

  changeStep() {
    this.handleStroopSteps.changeCurrentStep('stroopTest');
  }
  openDialog() {
    this.dialog.open(TutorialDialogComponent, {
      disableClose: true
    })
  }

}
