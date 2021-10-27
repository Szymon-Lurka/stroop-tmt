import { Injectable } from '@angular/core';
import { HandleTmtTestService } from './handle-tmt-test.service';
import { BehaviorSubject } from 'rxjs';
import { DataSet } from '../../../../lib/models/DataSet';

@Injectable({
  providedIn: 'root',
  useClass: HandleTmtTestService
})
export abstract class HandleTmtTest {
  abstract handle(isFirstStageCompleted: boolean): void;
  abstract currentDataSet: BehaviorSubject<DataSet[]>;
  abstract currentValue: BehaviorSubject<number>;
  abstract currentLetter: BehaviorSubject<string>;
  abstract handleMouseOver(value: number | string): void;
  abstract handleMouseDown(value: number | string): void;
}
