import { Injectable } from '@angular/core';
import { HandleStroopStagesService } from './handle-stroop-stages.service';
import { BehaviorSubject } from 'rxjs';
import { DataSet } from '../../../../../models/DataSet';

@Injectable({
  providedIn: 'root',
  useClass: HandleStroopStagesService
})
export abstract class HandleStroopStages {
  abstract currentStage: BehaviorSubject<number>;
  abstract currentSet: BehaviorSubject<DataSet[]>;
  abstract isDialogClosed: BehaviorSubject<boolean>;

  abstract handleChangeStage(): void;
}
