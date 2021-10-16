import { Injectable } from '@angular/core';
import { HandleStroopTestService } from './handle-stroop-test.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSet } from '../../../../../models/DataSet';

@Injectable({
  providedIn: 'root',
  useClass: HandleStroopTestService
})
export abstract class HandleStroopTest {
  abstract handle(): void;
  abstract currentSet: BehaviorSubject<DataSet[]>;
  abstract currentQuestionIndex: BehaviorSubject<number>;
}
