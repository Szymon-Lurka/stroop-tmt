import { Injectable } from '@angular/core';
import { RedirectToNextStageIfDoneService } from './redirect-to-next-stage-if-done.service';

@Injectable({
  providedIn: 'root',
  useClass: RedirectToNextStageIfDoneService
})
export abstract class RedirectToNextStageIfDone {
  abstract redirect(route: string, key: string): void;
}
