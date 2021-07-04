import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogData} from "../../lib/models/dialog-data";

@Component({
  selector: 'app-end-stage-dialog',
  templateUrl: './end-stage-dialog.component.html',
  styleUrls: ['./end-stage-dialog.component.scss']
})
export class EndStageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data);
  }
}
