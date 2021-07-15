import {Injectable} from "@angular/core";
import {HandleUserChoiceService} from "./handle-user-choice.service";
import {Answer} from "../../models/answer";
import {ErrorModel} from "../../models/error.model";

@Injectable({
  providedIn: 'root',
  useClass: HandleUserChoiceService
})
export abstract class HandleUserChoice {
  abstract saveAnswer(answer: Answer): void;
  abstract saveError(error: ErrorModel): void;
  abstract saveToLocalStorage(): void;
}
