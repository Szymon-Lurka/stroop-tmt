import { Component, Input } from '@angular/core';
import { FormField } from '../../models/form-field';

@Component({
  selector: 'tmt-stroop-test-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent extends FormField {
  @Input() max!: number;
  @Input() min!: number;
  constructor() {
    super();
  }
}
