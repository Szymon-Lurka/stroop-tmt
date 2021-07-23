import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirstSteps} from "../../lib/types/first-steps";
import {HandleFirstSteps} from "../../lib/services/handle-first-steps/handle-first-steps";
import {Subject} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit, OnDestroy {
  currentStep: FirstSteps = 'start';
  onDestroy = new Subject();

  constructor(private handleFirstSteps: HandleFirstSteps) { }
  ngOnInit() {
    this.handleFirstSteps.currentStep.subscribe((currentStep) => {
      this.currentStep = currentStep;
    })
  }

  ngOnDestroy() {
    this.onDestroy.next(true);
    this.onDestroy.complete();
  }
}
