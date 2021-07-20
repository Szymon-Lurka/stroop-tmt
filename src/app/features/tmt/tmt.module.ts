import {NgModule} from "@angular/core";
import {MainComponent} from "./components/main/main.component";
import {TmtRoutingModule} from "./tmt-routing.module";
import {CommonModule} from "@angular/common";
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import {MatButtonModule} from "@angular/material/button";
import { TutorialDialogComponent } from './components/tutorial-dialog/tutorial-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TmtTestComponent } from './components/tmt-test/tmt-test.component';
import { ThankYouScreenComponent } from './components/thank-you-screen/thank-you-screen.component';

@NgModule({
  declarations: [MainComponent, WelcomePageComponent, TutorialComponent, TutorialDialogComponent, TmtTestComponent, ThankYouScreenComponent],
    imports: [TmtRoutingModule, CommonModule, MatButtonModule, MatDialogModule]
})
export class TmtModule {
}
