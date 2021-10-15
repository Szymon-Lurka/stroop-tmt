import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/main/modules/welcome/welcome.module').then((m) => m.WelcomeModule)
  },
  {
    path: 'stroop',
    loadChildren: () => import('./core/main/modules/stroop/stroop.module').then((m) => m.StroopModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
