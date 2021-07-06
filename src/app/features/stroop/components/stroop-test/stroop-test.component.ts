import {Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import {firstStageColors} from "../../lib/data/first-stage";
import {HandleStroopStages} from "../../lib/services/handle-stroop-stages/handle-stroop-stages";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {HandleUserChoice} from "../../lib/services/handle-user-choice/handle-user-choice";

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

  @HostListener('window:keyup', ['$event'])
  onClick(key: KeyboardEvent) {

    if (this.isTheLastQuestionInSet()) return;
    if (this.isKeyCodeIsCorrect(key.code)) {

      const currentQuestion = this.currentSet[this.currentQuestionIndex]
      this.handleUserChoice.handle(key.code, currentQuestion, this.currentStage);

      this.currentQuestionIndex++;

      if (this.isTheLastQuestionInSet()) {
        this.handleStroopStages.handleChangeStage();
      }
    }
  }

  constructor(private handleStroopStages: HandleStroopStages,
              private handleUserChoice: HandleUserChoice) {
  }

  ngOnInit() {
    this.getCurrentSet();
    this.getCurrentStage();
  }

  ngOnDestroy() {
    this.stagesSubscription.next(true);
    this.stagesSubscription.complete();
  }

  private getCurrentSet() {
    this.handleStroopStages.currentSet
      .pipe(
        takeUntil(this.stagesSubscription)
      )
      .subscribe((set) => {
        this.currentQuestionIndex = 0;
        this.currentSet = set;
      })
  }

  private getCurrentStage() {
    this.handleStroopStages.currentStage
      .pipe(
        takeUntil(this.stagesSubscription)
      )
      .subscribe((stage) => {
        this.currentStage = stage;
      });
  }

  private isKeyCodeIsCorrect(keyCode: string) {
    return keyCode === 'KeyS' || keyCode === 'KeyA' || keyCode === 'KeyK' || keyCode === 'KeyL';
  }

  private isTheLastQuestionInSet() {
    return this.currentQuestionIndex === this.currentSet.length - 1
  }

}
