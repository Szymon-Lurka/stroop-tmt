import { Injectable } from '@angular/core';
import { HandleUserChoiceService } from './handle-user-choice.service';
import { KeyCodeColors } from '../../types/key-code-colors';
import { DataSet } from '../../../../../models/DataSet';

@Injectable({
  providedIn: 'root',
  useClass: HandleUserChoiceService
})
export abstract class HandleUserChoice {
  abstract handle(keyCode: KeyCodeColors, dataSet: DataSet, currentStage: number, reactionTimeInSecond: number): void;
  abstract saveToLocalStorage(): void;
}

