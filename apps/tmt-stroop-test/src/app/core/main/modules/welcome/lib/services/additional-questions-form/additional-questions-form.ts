import { Injectable } from '@angular/core';
import { AdditionalQuestionsFormService } from './additional-questions-form.service';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
  useClass: AdditionalQuestionsFormService
})
export abstract class AdditionalQuestionsForm {
  abstract get(): FormGroup;
  abstract questionOne(): FormControl;
  abstract questionTwo(): FormControl;
  abstract questionThree(): FormControl;
  abstract questionFour(): FormControl;
  abstract questionFive(): FormControl;
  abstract questionSix(): FormControl;
  abstract questionSeven(): FormControl;
  abstract questionEight(): FormControl;
  abstract questionNine(): FormControl;
  abstract questionTen(): FormControl;
}
