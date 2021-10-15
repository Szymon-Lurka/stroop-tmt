import { Injectable } from '@angular/core';
import { SaveAnswersToStorageService } from './save-answers-to-storage.service';

@Injectable({
  providedIn: 'root',
  useClass: SaveAnswersToStorageService
})
export abstract class SaveAnswersToStorage {
  abstract save(): void;
}
