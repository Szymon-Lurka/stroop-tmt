import {Component} from '@angular/core';
import {DataSet} from "../../lib/models/data-set";
import {firstDataSet} from "../../lib/data/first-data-set";
import {HandleUserChoice} from "../../lib/services/handle-user-choice/handle-user-choice";

@Component({
  selector: 'app-tmt-test',
  templateUrl: './tmt-test.component.html',
  styleUrls: ['./tmt-test.component.scss']
})
export class TmtTestComponent {
  currentDataSet: DataSet[] = firstDataSet;
  currentValue = 0;

constructor(private handleUserChoice: HandleUserChoice) {
}


  test(value: number) {
    if (value - this.currentValue === 1) {
      this.currentValue++;
      this.handleUserChoice.saveAnswer({
        value: this.currentValue,
        distance: 100,
        reactionTime: 2
      })
    } else {
      this.handleUserChoice.saveError({
        currentValue: this.currentValue,
        reactionTime: 2
      })
    }
    if (this.currentDataSet.length - this.currentValue === 0) {
      console.log('end');
      this.handleUserChoice.saveToLocalStorage();
    }
  }
}
