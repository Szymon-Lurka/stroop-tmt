import {Route, RouterModule} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {NgModule} from "@angular/core";

const routes: Route[] = [
  {path: '', component: MainComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmtRoutingModule {
}
