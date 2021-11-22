import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormField } from '../../models/form-field';
import { CustomOption } from '../../models/custom-options';

@Component({
  selector: 'tmt-stroop-test-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss']
})
export class InputCustomComponent extends FormField {
  @Input() CustomOptions!: CustomOption[];
  @Output() valueChanged = new EventEmitter();

  constructor() {
    super();
  }
}
