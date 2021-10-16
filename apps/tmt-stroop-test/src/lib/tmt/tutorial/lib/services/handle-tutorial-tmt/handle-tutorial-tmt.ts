import { Injectable } from '@angular/core';
import { HandleTutorialTmtService } from './handle-tutorial-tmt.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useClass: HandleTutorialTmtService
})
export abstract class HandleTutorialTmt {
  abstract handle(): void;

  abstract currentValue: BehaviorSubject<number>;

  abstract handleMouseOver(value: number | string): void;
}

