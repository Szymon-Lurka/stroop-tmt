import { Component, Input, OnInit } from '@angular/core';
import { FormField } from '../../models/form-field';

@Component({
  selector: 'tmt-stroop-test-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent extends FormField implements OnInit {
  @Input() hint?: string;
  @Input() scale!: number;
  questionScale!: number[];

  constructor() {
    super()
  }

  ngOnInit(): void {
    this.questionScale = Array.from(Array(this.scale + 1).keys());
    this.questionScale.shift();
  }

}
