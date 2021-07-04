import {Injectable} from '@angular/core';
import {HandleStroopStages} from "./handle-stroop-stages";
import {BehaviorSubject} from "rxjs";
import {DataSet} from "../../models/data-set";
import {firstStageColors} from "../../data/first-stage";
import {MatDialog} from "@angular/material/dialog";
import {EndStageDialogComponent} from "../../../components/end-stage-dialog/end-stage-dialog.component";
import {secondStageColors} from "../../data/second-stage";
import {thirdStageColors} from "../../data/third-stage";
import {Router} from "@angular/router";
import {LocalStorage} from "../../../../../../lib/services/local-storage/local-storage";

@Injectable()
export class HandleStroopStagesService implements HandleStroopStages {

  private _currentSet = new BehaviorSubject<DataSet[]>(firstStageColors);
  private _currentStage = new BehaviorSubject<number>(1);

  constructor(private dialog: MatDialog,
              private router: Router,
              private localStorage: LocalStorage) {
    if (this.localStorage.get('currentStroopStage')) {
      this._currentStage.next(Number(this.localStorage.get('currentStroopStage')));
    }
  }

  currentSet = this._currentSet.asObservable();
  currentStage = this._currentStage.asObservable();

  handleChangeStage() {
    this.dialog.open(EndStageDialogComponent, {
      data: {
        currentStage: this._currentStage.value,
        maxStages: 3,
        isLastStage: this._currentStage.value === 3
      }
    }).afterClosed().subscribe(() => {
      if (this._currentStage.value === 1) {
        this.setNextSetStage(secondStageColors)
      } else if (this._currentStage.value === 2) {
        this.setNextSetStage(thirdStageColors);
      } else if (this._currentStage.value === 3) {
        this.handleLastStage();
        return;
      }
      this._currentStage.next(this._currentStage.value + 1);
      this.localStorage.set('currentStroopStage', this._currentStage.value.toString());
    });
  }

  private setNextSetStage(set: DataSet[]) {
    this._currentSet.next(set);
  }

  private handleLastStage() {
    this.localStorage.set('isStroopDone', 'true');
    this.router.navigate(['tmt']).then();
  }
}
