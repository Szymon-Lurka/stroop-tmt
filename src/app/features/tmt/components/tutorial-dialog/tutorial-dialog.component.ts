import { Component, OnInit } from '@angular/core';
import {LocalStorage} from "../../../../../lib/services/local-storage/local-storage";
import {HandleTmtSteps} from "../../lib/services/handle-tmt-steps/handle-tmt-steps";

@Component({
  selector: 'app-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.scss']
})
export class TutorialDialogComponent implements OnInit {

  constructor(private localStorage: LocalStorage,
              private handleTmtSteps: HandleTmtSteps) { }

  ngOnInit(): void {
  }
  redirectToTmtTest() {
    this.localStorage.set('tmtTutorialDone', 'true');
    this.handleTmtSteps.changeCurrentStep('tmtTest');
  }
  repeatTutorial() {
    console.log('Reset logiki');
  }

}
