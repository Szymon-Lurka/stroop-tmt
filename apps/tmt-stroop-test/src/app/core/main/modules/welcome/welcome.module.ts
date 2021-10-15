import {NgModule} from "@angular/core";
import {WelcomeRoutingModule} from "./welcome-routing.module";
import { WelcomeViewComponent } from './components/welcome-view/welcome-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DemoDataFormComponent } from './components/demo-data-form/demo-data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { AdditionalQuestionsComponent } from './components/additional-questions/additional-questions.component';
import { CoreFormModule } from '../../../../../lib/core-form/core-form.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [WelcomeRoutingModule, MatButtonModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, CommonModule, MatInputModule, MatRadioModule, CoreFormModule],
  declarations: [WelcomeViewComponent, DemoDataFormComponent, AdditionalQuestionsComponent, HeaderComponent]
})
export class WelcomeModule {}
