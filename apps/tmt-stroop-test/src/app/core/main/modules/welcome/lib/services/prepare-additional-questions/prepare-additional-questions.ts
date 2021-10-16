import { Injectable } from '@angular/core';
import { PrepareAdditionalQuestionsService } from './prepare-additional-questions.service';
import { AdditionalQuestionsConfig } from '../../models/additional-questions-config';

@Injectable({
  providedIn: 'root',
  useClass: PrepareAdditionalQuestionsService
})
export abstract class PrepareAdditionalQuestions {
  abstract prepare(): AdditionalQuestionsConfig[];
}
