import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InputNumberComponent } from './form-fields/input-number/input-number.component';
import { SelectComponent } from './form-fields/select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { InputRadioComponent } from './form-fields/input-radio/input-radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { InputCustomComponent } from './form-fields/input-custom/input-custom.component';

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
    InputNumberComponent,
    SelectComponent,
    InputRadioComponent,
    InputCustomComponent
  ],
  declarations: [
    InputNumberComponent,
    SelectComponent,
    InputRadioComponent,
    InputCustomComponent
  ]
})
export class CoreFormModule {}
