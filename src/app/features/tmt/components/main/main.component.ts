import {Component, OnDestroy, OnInit} from '@angular/core';
import {HandleTmtSteps} from "../../lib/services/handle-tmt-steps/handle-tmt-steps";
import {TmtSteps} from "../../lib/types/tmt-steps";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  step!: TmtSteps;
  stepSubscription = new Subject();
constructor(private handleTmtSteps: HandleTmtSteps) {
}

ngOnInit() {
  this.handleTmtSteps.currentStep
    .pipe(
      takeUntil(this.stepSubscription)
    )
    .subscribe((step) => {
    this.step = step;
  })
}

ngOnDestroy() {
  this.stepSubscription.next(true);
  this.stepSubscription.complete();
}
}
