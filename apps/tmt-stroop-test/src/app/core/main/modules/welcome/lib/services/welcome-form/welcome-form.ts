import { Injectable } from '@angular/core';
import { WelcomeFormService } from './welcome-form.service';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
  useClass: WelcomeFormService
})
export abstract class WelcomeForm {
  abstract get(): FormGroup;
  abstract sex(): FormControl;
  abstract age(): FormControl;
  abstract education(): FormControl;
  abstract residence(): FormControl;
  abstract financialSituation(): FormControl;
  abstract isPlayingGames(): FormControl;
  abstract numberOfHoursPerMonth(): FormControl
  abstract topPopularGame(): FormControl;
  abstract futureInGaming(): FormControl;
  abstract familyAccepts(): FormControl;
  abstract numberOfHoursPerMonthInTopGame(): FormControl;
}
