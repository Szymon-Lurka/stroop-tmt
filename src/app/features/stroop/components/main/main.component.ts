import {Component, OnDestroy, OnInit} from '@angular/core';
import {StroopSteps} from "../../lib/types/stroop-steps";
import {HandleStroopSteps} from "../../lib/services/handle-stroop-steps/handle-stroop-steps";
import {Subscription} from "rxjs";
import {LocalStorage} from "../../../../../lib/services/local-storage/local-storage";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  step: StroopSteps = 'welcome';
  currentStepSubscription!: Subscription;

  constructor(private handleStroopSteps: HandleStroopSteps,
              private localStorage: LocalStorage) {
  }

  ngOnInit() {
    this.currentStepSubscription = this.handleStroopSteps.currentStep.subscribe((step) => {
      this.step = step;
    });
    this.checkIsTutorialDone();
  }

  ngOnDestroy() {
    this.currentStepSubscription.unsubscribe();
  }

  private checkIsTutorialDone() {
    if (this.localStorage.get('stroopTutorialDone')) {
      this.step = 'stroopTest';
    }
  }

}
