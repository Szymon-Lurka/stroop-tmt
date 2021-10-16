import { NgModule } from '@angular/core';
import { StroopRoutingModule } from './stroop-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { StroopLibModule } from '../../../../../lib/stroop/stroop.module';
import { TestComponent } from './components/test/test.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [StroopRoutingModule, MatButtonModule, StroopLibModule, MatDialogModule],
  declarations: [WelcomeComponent, TutorialComponent, TestComponent]
})
export class StroopModule {}
