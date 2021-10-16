import { Component, OnInit } from '@angular/core';
import { tutorialDataSet } from '../../lib/data/TutorialDataSet';
import { HandleTutorialTmt } from '../../lib/services/handle-tutorial-tmt/handle-tutorial-tmt';
import { checkStyles as checkStylesFn } from '../../../lib/utils/check-styles';
import { RedirectToNextStageIfDone } from '../../../../services/redirect-to-next-stage-if-done/redirect-to-next-stage-if-done';

@Component({
  selector: 'tmt-stroop-test-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss']
})
export class TutorialPageComponent implements OnInit {
  dataSet = tutorialDataSet;
  currentValue = 0;

  constructor(private handleTutorialTmt: HandleTutorialTmt,
              private redirectToNextStageIfDone:RedirectToNextStageIfDone) {
  }

  handleMouseOver(value: number | string) {
    this.handleTutorialTmt.handleMouseOver(value);
  }

  ngOnInit() {
    this.redirectToNextStageIfDone.redirect('tmt/test', 'tmtTutorialDone');
    this.handleTutorialTmt.currentValue.subscribe((value) => this.currentValue = value);
    this.handleTutorialTmt.handle();
  }

  checkStyles(value: number | string): string {
    return checkStylesFn(value, this.currentValue);
  }
}
