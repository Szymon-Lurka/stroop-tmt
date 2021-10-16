import { NgModule } from '@angular/core';
import { TutorialPageComponent } from './tutorial/components/tutorial-page/tutorial-page.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TutorialDialogComponent } from './tutorial/components/tutorial-dialog/tutorial-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { TestPageComponent } from './test/components/test-page/test-page.component';
import { TestDialogComponent } from './test/components/test-dialog/test-dialog.component';

@NgModule({
  exports: [
    TutorialPageComponent,
    TestPageComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [TutorialPageComponent, TutorialDialogComponent, TestPageComponent, TestDialogComponent]
})
export class StroopLibModule {}
