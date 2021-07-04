import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";

const routes: Route[] = [
  {path: '', component: MainComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StroopRoutingModule {
}
