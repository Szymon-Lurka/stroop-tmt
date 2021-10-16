import { Injectable } from '@angular/core';
import { PrepareAdditionalQuestions } from './prepare-additional-questions';
import { AdditionalQuestionsForm } from '../additional-questions-form/additional-questions-form';
import { AdditionalQuestionsConfig } from '../../models/additional-questions-config';

@Injectable()
export class PrepareAdditionalQuestionsService implements PrepareAdditionalQuestions{

  constructor(private additionalQuestionsForm: AdditionalQuestionsForm) { }

  prepare(): AdditionalQuestionsConfig[] {
    return [
      {
        question: 'Nie przeszkadza mi, jeśli inni wydają się mnie nie akceptować',
        formControl: this.additionalQuestionsForm.questionOne()
      },
      {
        question: 'Bardzo staram się nie robić rzeczy, przez które ktoś mógłby chcieć mnie unikać lub odrzucić',
        formControl: this.additionalQuestionsForm.questionTwo()
      },
      {
        question: 'Rzadko martwię się tym, czy innym na mnie zależy',
        formControl: this.additionalQuestionsForm.questionThree()
      },
      {
        question: 'Potrzebuję mieć świadomość, że mam kogoś, do kogo mogę się zwrócić, w razie potrzeby',
        formControl: this.additionalQuestionsForm.questionFour()
      },
      {
        question: 'Chcę, aby inni ludzie mnie akceptowali',
        formControl: this.additionalQuestionsForm.questionFive()
      },
      {
        question: 'Nie lubię być sam/sama',
        formControl: this.additionalQuestionsForm.questionSix()
      },
      {
        question: 'Nie przeszkadza mi bycie z dala od moich przyjaciół przez dłuższy czas',
        formControl: this.additionalQuestionsForm.questionSeven()
      },
      {
        question: 'Mam silną potrzebę przynależności',
        formControl: this.additionalQuestionsForm.questionEight()
      },
      {
        question: 'Bardzo się przejmuję, kiedy ktoś mnie nie uwzględni w swoich planach',
        formControl: this.additionalQuestionsForm.questionNine()
      },
      {
        question: 'Mocno mnie to rani, kiedy inni mnie nie akceptują',
        formControl: this.additionalQuestionsForm.questionTen()
      },
    ];
  }
}
