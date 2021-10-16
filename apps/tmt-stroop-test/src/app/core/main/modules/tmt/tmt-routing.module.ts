import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [{
  path: '',
  component: WelcomePageComponent
},
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmtRoutingModule {
}
