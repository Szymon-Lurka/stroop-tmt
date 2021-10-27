import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LocalStorage } from '../../../../../../../lib/services/local-storage/local-storage';
@Component({
  selector: 'tmt-stroop-test-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {
constructor(private localStorage: LocalStorage) {

}
  ngOnInit() {
    this.localStorage.clear();
  }
}
