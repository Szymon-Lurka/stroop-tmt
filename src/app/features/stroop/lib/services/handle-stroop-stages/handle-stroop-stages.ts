import {Injectable} from "@angular/core";
import {HandleStroopStagesService} from "./handle-stroop-stages.service";
import {Observable} from "rxjs";
import {DataSet} from "../../models/data-set";

@Injectable({
  providedIn: 'root',
  useClass: HandleStroopStagesService
})
export abstract class HandleStroopStages {
  abstract currentStage: Observable<number>;
  abstract currentSet: Observable<DataSet[]>;
  abstract handleChangeStage(): void;
}
