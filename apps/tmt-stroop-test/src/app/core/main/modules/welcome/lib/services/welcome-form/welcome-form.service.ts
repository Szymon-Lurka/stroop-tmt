import { Injectable } from '@angular/core';
import { WelcomeForm } from './welcome-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class WelcomeFormService implements WelcomeForm {
  formGroup = new FormGroup({
    sex: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
    education: new FormControl(null, Validators.required),
    residence: new FormControl(null, Validators.required),
    financialSituation: new FormControl(null, Validators.required),
    isPlayingGames: new FormControl(null, Validators.required),
    numberOfHoursPerMonth: new FormControl(null),
    topPopularGame: new FormControl(null),
    topPopularGameCustom: new FormControl(null),
    futureInGaming: new FormControl(null),
    familyAccepts: new FormControl(null),
    numberOfHoursPerMonthInTopGame: new FormControl(null)
  });

  get(): FormGroup {
    return this.formGroup;
  }

  age(): FormControl {
    return this.formGroup.get('age') as FormControl;
  }

  sex(): FormControl {
    return this.formGroup.get('sex') as FormControl;
  }

  familyAccepts(): FormControl {
    return this.formGroup.get('familyAccepts') as FormControl;
  }

  numberOfHoursPerMonth(): FormControl {
    return this.formGroup.get('numberOfHoursPerMonth') as FormControl;
  }

  education(): FormControl {
    return this.formGroup.get('education') as FormControl;
  }


  numberOfHoursPerMonthInTopGame(): FormControl {
    return this.formGroup.get('numberOfHoursPerMonthInTopGame') as FormControl;
  }

  isPlayingGames(): FormControl {
    return this.formGroup.get('isPlayingGames') as FormControl;
  }

  futureInGaming(): FormControl {
    return this.formGroup.get('futureInGaming') as FormControl;
  }

  financialSituation(): FormControl {
    return this.formGroup.get('financialSituation') as FormControl;
  }


  topPopularGame(): FormControl {
    return this.formGroup.get('topPopularGame') as FormControl;
  }

  topPopularGameCustom(): FormControl {
    return this.formGroup.get('topPopularGameCustom') as FormControl;
  }


  residence(): FormControl {
    return this.formGroup.get('residence') as FormControl;
  }
}
