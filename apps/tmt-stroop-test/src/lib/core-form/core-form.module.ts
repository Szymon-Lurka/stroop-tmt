import { NgModule } from '@angular/core';
import { BasicInputComponent } from './form-fields/basic-input/basic-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InputNumberComponent } from './form-fields/input-number/input-number.component';
import { SelectComponent } from './form-fields/select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { InputRadioComponent } from './form-fields/input-radio/input-radio.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    MatRadioModule
  ],
  exports: [
    BasicInputComponent,
    InputNumberComponent,
    SelectComponent,
    InputRadioComponent
  ],
  declarations: [
    BasicInputComponent,
    InputNumberComponent,
    SelectComponent,
    InputRadioComponent
  ]
})
export class CoreFormModule {}
