import {Injectable} from "@angular/core";
import {HandleUserChoiceService} from "./handle-user-choice.service";
import {DataSet} from "../../models/data-set";

@Injectable({
  providedIn: 'root',
  useClass: HandleUserChoiceService
})
export abstract class HandleUserChoice {
  abstract handle(keyCode: string, dataSet: DataSet, currentStage: number): void;

  abstract saveToLocalStorage(): void;
}
