import {NgModule} from "@angular/core";
import {MainComponent} from "./components/main/main.component";
import {TmtRoutingModule} from "./tmt-routing.module";
import {CommonModule} from "@angular/common";
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [MainComponent, WelcomePageComponent, TutorialComponent],
  imports: [TmtRoutingModule, CommonModule, MatButtonModule]
})
export class TmtModule {
}
