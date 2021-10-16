import { NgModule } from '@angular/core';
import { ThankYouRoutingModule } from './thank-you-routing.module';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';
import { CoreComponentsModule } from '../../../../../lib/components/core-components.module';

@NgModule({
  imports: [ThankYouRoutingModule, CoreComponentsModule],
  declarations: [
    ThankYouPageComponent
  ]
})
export class ThankYouModule {}
