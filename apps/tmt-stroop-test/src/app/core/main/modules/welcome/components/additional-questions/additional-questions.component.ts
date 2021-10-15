import { Component, OnInit } from '@angular/core';
import { AdditionalQuestionsForm } from '../../lib/services/additional-questions-form/additional-questions-form';
import { PrepareAdditionalQuestions } from '../../lib/services/prepare-additional-questions/prepare-additional-questions';
import { AdditionalQuestionsConfig } from '../../lib/models/additional-questions-config';
import { SaveAnswersToStorage } from '../../lib/services/save-answers-to-storage/save-answers-to-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'tmt-stroop-test-additional-questions',
  templateUrl: './additional-questions.component.html',
  styleUrls: ['./additional-questions.component.scss']
})
export class AdditionalQuestionsComponent implements OnInit {
  questions!: AdditionalQuestionsConfig[];

  constructor(public additionalQuestionsForm: AdditionalQuestionsForm,
              private prepareAdditionalQuestions: PrepareAdditionalQuestions,
              private saveAnswersToStorage: SaveAnswersToStorage,
              private router: Router) {
  }

  ngOnInit(): void {
    this.questions = this.prepareAdditionalQuestions.prepare();
  }

  onSubmit() {
    this.saveAnswersToStorage.save();
    this.router.navigate(['stroop']).then();
  }

}
