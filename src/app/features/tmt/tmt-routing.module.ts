import {Route, RouterModule} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {NgModule} from "@angular/core";
import {ThankYouScreenComponent} from "./components/thank-you-screen/thank-you-screen.component";

const routes: Route[] = [
  {path: '', component: MainComponent},
  {path: 'thank-you', component: ThankYouScreenComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmtRoutingModule {
}
