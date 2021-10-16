import { Injectable } from '@angular/core';
import { AdditionalQuestionsForm } from './additional-questions-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AdditionalQuestionsFormService implements AdditionalQuestionsForm {
  formGroup = new FormGroup({
    questionOne: new FormControl(null, Validators.required),
    questionTwo: new FormControl(null, Validators.required),
    questionThree: new FormControl(null, Validators.required),
    questionFour: new FormControl(null, Validators.required),
    questionFive: new FormControl(null, Validators.required),
    questionSix: new FormControl(null, Validators.required),
    questionSeven: new FormControl(null, Validators.required),
    questionEight: new FormControl(null, Validators.required),
    questionNine: new FormControl(null, Validators.required),
    questionTen: new FormControl(null, Validators.required)
  });

  get(): FormGroup {
    return this.formGroup;
  }

  questionOne(): FormControl {
    return this.formGroup.get('questionOne') as FormControl;
  }

  questionTwo(): FormControl {
    return this.formGroup.get('questionTwo') as FormControl;
  }

  questionThree(): FormControl {
    return this.formGroup.get('questionThree') as FormControl;
  }

  questionFour(): FormControl {
    return this.formGroup.get('questionFour') as FormControl;
  }

  questionFive(): FormControl {
    return this.formGroup.get('questionFive') as FormControl;
  }

  questionSix(): FormControl {
    return this.formGroup.get('questionSix') as FormControl;
  }

  questionSeven(): FormControl {
    return this.formGroup.get('questionSeven') as FormControl;
  }

  questionEight(): FormControl {
    return this.formGroup.get('questionEight') as FormControl;
  }

  questionNine(): FormControl {
    return this.formGroup.get('questionNine') as FormControl;
  }

  questionTen(): FormControl {
    return this.formGroup.get('questionTen') as FormControl;
  }
}
