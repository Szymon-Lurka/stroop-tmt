import { Component, OnInit } from '@angular/core';
import { HandleStroopTest } from '../lib/services/handle-stroop-test/handle-stroop-test';
import { firstStageColors } from '../lib/data/first-stage';
import { HandleStroopStages } from '../lib/services/handle-stroop-stages/handle-stroop-stages';

@Component({
  selector: 'tmt-stroop-test-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  currentSet = firstStageColors;
  currentQuestionIndex = 0;

  constructor(private handleStroopTest: HandleStroopTest,
              private handleStroopStages: HandleStroopStages) {
  }

  ngOnInit(): void {
    this.handleStroopTest.currentSet.subscribe((currentSet) => this.currentSet = currentSet);
    this.handleStroopTest.currentQuestionIndex.subscribe((currentIndex) => this.currentQuestionIndex = currentIndex);
    this.handleStroopTest.handle();
    this.handleStroopStages.currentSet.subscribe((currentSet) => this.currentSet = currentSet);
  }
}
