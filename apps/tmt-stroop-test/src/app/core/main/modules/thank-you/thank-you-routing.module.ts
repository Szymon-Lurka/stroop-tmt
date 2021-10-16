import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';

const routes: Routes = [
  {
    path: '',
    component: ThankYouPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThankYouRoutingModule {}
