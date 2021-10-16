import { Injectable } from '@angular/core';
import { HandleStroopTutorial } from './handle-stroop-tutorial';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { isKeyCodeCorrect } from '../../../../utils/is-key-code-correct';

@Injectable()
export class HandleStroopTutorialService implements HandleStroopTutorial {
  currentQuestionIndex = new BehaviorSubject<number>(0);
  currentSubscription!: Subscription;

  handle(): void {
    this.currentQuestionIndex.next(0);
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }
    this.currentSubscription = fromEvent(document, 'keyup')
      .subscribe((event) => {
        const keyboardEvent = event as KeyboardEvent;
        if (isKeyCodeCorrect(keyboardEvent.code)) {
          this.currentQuestionIndex.next(this.currentQuestionIndex.value + 1);
        }
      });
  }

}
