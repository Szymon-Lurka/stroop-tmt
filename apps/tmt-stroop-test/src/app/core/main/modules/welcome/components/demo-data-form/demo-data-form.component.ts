import { Component } from '@angular/core';
import { ManageWelcomeForm } from '../../lib/services/manage-welcome-form/manage-welcome-form';
import { WelcomeForm } from '../../lib/services/welcome-form/welcome-form';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { SelectConfigs } from '../../lib/types/select-configs';

@Component({
  selector: 'tmt-stroop-test-demo-data-form',
  templateUrl: './demo-data-form.component.html',
  styleUrls: ['./demo-data-form.component.scss']
})
export class DemoDataFormComponent {
  canDisplayGamingQuestions = false;
  selectConfigs = SelectConfigs;

  constructor(private manageWelcomeForm: ManageWelcomeForm, public welcomeForm: WelcomeForm, private router: Router) {
  }

  onSubmit() {
    this.router.navigate(['additional-questions']).then();
  }

  changeState(matSelectChange: MatSelectChange) {
    if (matSelectChange.value === 1) {
      this.canDisplayGamingQuestions = true;
      this.manageWelcomeForm.addValidatorsToGameQuestions();
    } else {
      this.canDisplayGamingQuestions = false;
      this.manageWelcomeForm.removeValidatorsFromGameQuestions();
    }
  }
}
