import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormField } from '../../models/form-field';
import { SelectOption } from '../../models/select-option';

@Component({
  selector: 'tmt-stroop-test-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends FormField {
  @Input() selectOptions!: SelectOption[];
  @Output() valueChanged = new EventEmitter();

  constructor() {
    super();
  }
}
