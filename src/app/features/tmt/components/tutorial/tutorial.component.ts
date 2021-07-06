import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TutorialDialogComponent} from "../tutorial-dialog/tutorial-dialog.component";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(TutorialDialogComponent, {
      disableClose: true
    });
  }
}
