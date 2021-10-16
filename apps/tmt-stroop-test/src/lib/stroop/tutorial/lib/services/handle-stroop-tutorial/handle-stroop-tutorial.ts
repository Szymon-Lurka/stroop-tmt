import { Injectable } from '@angular/core';
import { HandleStroopTutorialService } from './handle-stroop-tutorial.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useClass: HandleStroopTutorialService
})
export abstract class HandleStroopTutorial {
  abstract handle():void;
  abstract currentQuestionIndex: BehaviorSubject<number>;
}
