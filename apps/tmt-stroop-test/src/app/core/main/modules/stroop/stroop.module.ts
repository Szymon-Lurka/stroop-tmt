import { NgModule } from '@angular/core';
import { StroopRoutingModule } from './stroop-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { TutorialComponent } from './components/tutorial/tutorial.component';

@NgModule({
  imports: [StroopRoutingModule, MatButtonModule],
  declarations: [WelcomeComponent, TutorialComponent]
})
export class StroopModule {}
