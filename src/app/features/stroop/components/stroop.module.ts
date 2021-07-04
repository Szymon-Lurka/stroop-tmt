import {NgModule} from "@angular/core";
import {StroopRoutingModule} from "./stroop-routing.module";
import {MainComponent} from "./main/main.component";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import { StroopTestComponent } from './stroop-test/stroop-test.component';
import { TutorialDialogComponent } from './tutorial-dialog/tutorial-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import { EndStageDialogComponent } from './end-stage-dialog/end-stage-dialog.component';

@NgModule({
  declarations: [MainComponent, TutorialPageComponent, WelcomePageComponent, StroopTestComponent, TutorialDialogComponent, EndStageDialogComponent],
  imports: [StroopRoutingModule, MatButtonModule, CommonModule, MatDialogModule, MatFormFieldModule],
})
export class StroopModule {
}
