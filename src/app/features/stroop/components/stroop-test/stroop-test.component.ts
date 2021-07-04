import {Component, OnDestroy, OnInit} from '@angular/core';
import {firstStageColors} from "../../lib/data/first-stage";
import {HandleStroopStages} from "../../lib/services/handle-stroop-stages/handle-stroop-stages";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-stroop-test',
  templateUrl: './stroop-test.component.html',
  styleUrls: ['./stroop-test.component.scss']
})
export class StroopTestComponent implements OnInit, OnDestroy {
  currentQuestionIndex = 0;
  currentSet = firstStageColors;
  currentStage = 1;
  stagesSubscription = new Subject();

  constructor(private handleStroopStages: HandleStroopStages) {
  }

  ngOnInit() {
    this.getCurrentStageAndCurrentSet();
  }

  ngOnDestroy() {
    this.stagesSubscription.next(true);
    this.stagesSubscription.complete();
  }

  changeSet() {
    this.handleStroopStages.handleChangeStage();
  }

  private getCurrentStageAndCurrentSet() {
    this.handleStroopStages.currentStage
      .pipe(
        takeUntil(this.stagesSubscription)
      )
      .subscribe((stage) => {
        this.currentStage = stage;
      });
    this.handleStroopStages.currentSet
      .pipe(
        takeUntil(this.stagesSubscription)
      )
      .subscribe((set) => {
        this.currentSet = set;
      })
  }
}
