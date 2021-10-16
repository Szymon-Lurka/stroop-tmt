import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeViewComponent } from './components/welcome-view/welcome-view.component';
import { DemoDataFormComponent } from './components/demo-data-form/demo-data-form.component';
import { AdditionalQuestionsComponent } from './components/additional-questions/additional-questions.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'welcome', pathMatch: 'full'
},
  {
    path: 'welcome',
    component: WelcomeViewComponent
  },
  {
    path: 'demographics-data',
    component: DemoDataFormComponent
  },
  {
    path: 'additional-questions',
    component: AdditionalQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {
}
