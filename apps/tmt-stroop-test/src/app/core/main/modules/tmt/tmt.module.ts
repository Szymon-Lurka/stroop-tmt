import { NgModule } from '@angular/core';
import { TmtRoutingModule } from './tmt-routing.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MatButtonModule } from '@angular/material/button';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { TmtLibModule } from '../../../../../lib/tmt/tmt.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [WelcomePageComponent, TutorialComponent, TestComponent],
  imports: [TmtRoutingModule, MatButtonModule, TmtLibModule]
})
export class TmtModule {}
