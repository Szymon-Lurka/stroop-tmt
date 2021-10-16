import { NgModule } from '@angular/core';
import { TutorialPageComponent } from './tutorial/components/tutorial-page/tutorial-page.component';
import { CommonModule } from '@angular/common';
import { TutorialDialogComponent } from './tutorial/components/tutorial-dialog/tutorial-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TestPageComponent } from './test/components/test-page/test-page.component';

@NgModule({
  declarations: [TutorialPageComponent, TutorialDialogComponent, TestPageComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [TutorialPageComponent, TestPageComponent]
})
export class TmtLibModule {
}
