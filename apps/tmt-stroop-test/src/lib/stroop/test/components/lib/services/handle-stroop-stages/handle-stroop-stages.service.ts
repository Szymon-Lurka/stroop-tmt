import { Injectable } from '@angular/core';
import { HandleStroopStages } from './handle-stroop-stages';
import { BehaviorSubject } from 'rxjs';
import { DataSet } from '../../../../../models/DataSet';
import { firstStageColors } from '../../data/first-stage';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HandleUserChoice } from '../handle-user-choice/handle-user-choice';
import { TestDialogComponent } from '../../../test-dialog/test-dialog.component';
import { secondStageColors } from '../../data/second-stage';

@Injectable()
export class HandleStroopStagesService implements HandleStroopStages {

  constructor(private dialog: MatDialog,
              private router: Router,
              private handleUserChoice: HandleUserChoice) {
  }
  isDialogClosed = new BehaviorSubject<boolean>(false);
  currentStage = new BehaviorSubject<number>(1);
  currentSet = new BehaviorSubject<DataSet[]>(firstStageColors);

  handleChangeStage() {
    this.isDialogClosed.next(false);
    this.dialog.open(TestDialogComponent, {
      data: {
        isLastStage: this.currentStage.value === 2
      }
    }).afterClosed().subscribe(() => {
      if (this.currentStage.value === 1) {
        this.setNextSetStage(secondStageColors);
      } else if (this.currentStage.value === 2) {
        this.handleLastStage();
      }
      if (this.currentStage.value === 2) return;
      this.isDialogClosed.next(true);
      this.currentStage.next(this.currentStage.value + 1);
    });
  }

  private setNextSetStage(set: DataSet[]) {
    this.currentSet.next(set);
  }

  private handleLastStage() {
    this.handleUserChoice.saveToLocalStorage();
    this.router.navigate(['tmt']).then();
  }
}
