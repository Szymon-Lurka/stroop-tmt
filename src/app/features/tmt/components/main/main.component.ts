import {Component, OnDestroy, OnInit} from '@angular/core';
import {HandleTmtSteps} from "../../lib/services/handle-tmt-steps/handle-tmt-steps";
import {TmtSteps} from "../../lib/types/tmt-steps";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {LocalStorage} from "../../../../../lib/services/local-storage/local-storage";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  step!: TmtSteps;
  stepSubscription = new Subject();
constructor(private handleTmtSteps: HandleTmtSteps,
            private localStorage: LocalStorage) {
}

ngOnInit() {
  this.handleTmtSteps.currentStep
    .pipe(
      takeUntil(this.stepSubscription)
    )
    .subscribe((step) => {
    this.step = step;
  })
  this.checkIsTutorialDone();
}

  private checkIsTutorialDone() {
    if (this.localStorage.get('stroopTestAnswers')) {
      this.step = 'tmtTest';
    }
  }

ngOnDestroy() {
  this.stepSubscription.next(true);
  this.stepSubscription.complete();
}
}
