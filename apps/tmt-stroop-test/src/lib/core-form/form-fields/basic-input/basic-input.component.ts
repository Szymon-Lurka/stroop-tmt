import { Component } from '@angular/core';
import { FormField } from '../../models/form-field';

@Component({
  selector: 'tmt-stroop-test-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent extends FormField {

  constructor() {
    super();
  }
}
