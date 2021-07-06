import {Route, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {FirstStepComponent} from "./features/first-step/components/first-step/first-step.component";
import {NgModule} from "@angular/core";
import {GoBackGuard} from "../lib/guards/go-back-to-first-page-guard/go-back.guard";
import {GoBackToStroopGuard} from "../lib/guards/go-back-to-stroop-guard/go-back-to-stroop.guard";
import {IsStillFirstPageGuard} from "../lib/guards/is-still-first-page/is-still-first-page.guard";

const routes: Route[] = [
  {
    path: '', component: AppComponent,
    children: [
      {path: '', component: FirstStepComponent, canActivate: [GoBackGuard]} ,
      {
        path: 'stroop',
        canActivate: [GoBackToStroopGuard],
        canActivateChild: [IsStillFirstPageGuard],
        loadChildren: () => import('../app/features/stroop/components/stroop.module').then((m) => m.StroopModule)
      },
      {
        path: 'tmt',
        canActivateChild: [IsStillFirstPageGuard],
        loadChildren: () => import('../app/features/tmt/tmt.module').then((m) => m.TmtModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
