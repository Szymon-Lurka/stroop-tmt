import { Component, OnInit } from '@angular/core';
import { HandleTmtTest } from '../../lib/services/handle-tmt-test/handle-tmt-test';
import { firstDataSet } from '../../lib/data/first-data-set';
import { checkStyles as checkStylesFn } from '../../../lib/utils/check-styles';
import { LocalStorage } from '../../../../services/local-storage/local-storage';

@Component({
  selector: 'tmt-stroop-test-tmt-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  currentSet = firstDataSet;
  currentValue = 0;
  currentLetter?: string;
  isFirstStageCompleted = false;

  constructor(private handleTmtTest: HandleTmtTest,
              private localStorage: LocalStorage) {
  }

  ngOnInit(): void {
    this.isFirstStageCompleted = !!this.localStorage.get('tmtFirstStageDone');
    this.handleTmtTest.handle(this.isFirstStageCompleted);
    this.getValues();
  }

  handleMouseOver(value: number | string) {
    this.handleTmtTest.handleMouseOver(value);
  }

  handleMouseDown(value: number | string) {
    this.handleTmtTest.handleMouseDown(value);
  }

  checkStyles(value: number | string) {
    return this.currentLetter ? checkStylesFn(value, this.currentValue, this.currentLetter) : checkStylesFn(value, this.currentValue);
  }

  private getValues() {
    this.handleTmtTest.currentDataSet.subscribe((set) => this.currentSet = set);
    this.handleTmtTest.currentValue.subscribe((val) => this.currentValue = val);
    this.handleTmtTest.currentLetter.subscribe((letter) => this.currentLetter = letter);
  }

}
