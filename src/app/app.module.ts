import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FirstStepComponent} from "./features/first-step/components/first-step/first-step.component";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatDialogModule} from "@angular/material/dialog";
import {TmtModule} from "./features/tmt/tmt.module";
import { StartComponent } from './features/first-step/components/start/start.component';
import { DemoDataFormComponent } from './features/first-step/components/demo-data-form/demo-data-form.component';
import { SurveyFormComponent } from './features/first-step/components/survey-form/survey-form.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    StartComponent,
    DemoDataFormComponent,
    SurveyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatDialogModule,
    TmtModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
