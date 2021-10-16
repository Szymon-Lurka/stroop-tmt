import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CanEnterFirstStageGuard } from '../lib/guards/can-enter-first-stage/can-enter-first-stage.guard';
import { CanEnterStroopTestGuard } from '../lib/guards/can-enter-stroop-test/can-enter-stroop-test.guard';
import { CanEnterTmtTestGuard } from '../lib/guards/can-enter-tmt-test/can-enter-tmt-test.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/main/modules/welcome/welcome.module').then((m) => m.WelcomeModule),
    canActivate: [CanEnterFirstStageGuard]
  },
  {
    path: 'stroop',
    loadChildren: () => import('./core/main/modules/stroop/stroop.module').then((m) => m.StroopModule),
    canActivate: [CanEnterStroopTestGuard]
  },
  {
    path: 'tmt',
    loadChildren: () => import('./core/main/modules/tmt/tmt.module').then((m) => m.TmtModule),
    canActivate: [CanEnterTmtTestGuard]
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./core/main/modules/thank-you/thank-you.module').then((m) => m.ThankYouModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
