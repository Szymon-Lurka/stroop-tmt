import { Injectable } from '@angular/core';
import { ManageWelcomeFormService } from './manage-welcome-form.service';

@Injectable({
  providedIn: 'root',
  useClass: ManageWelcomeFormService
})
export abstract class ManageWelcomeForm {
  abstract addValidatorsToGameQuestions(): void;
  abstract removeValidatorsFromGameQuestions(): void;
  abstract addValidatorToTopPopularGameCustom(): void;
  abstract removeValidatorFromTopPopularGameCustom(): void;

}
