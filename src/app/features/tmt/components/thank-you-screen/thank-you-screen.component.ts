import { Component, OnInit } from '@angular/core';
import {LocalStorage} from "../../../../../lib/services/local-storage/local-storage";
import {first} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-thank-you-screen',
  templateUrl: './thank-you-screen.component.html',
  styleUrls: ['./thank-you-screen.component.scss']
})
export class ThankYouScreenComponent implements OnInit {
  constructor(private localStorage: LocalStorage,
              private http: HttpClient) {
  }
  ngOnInit() {
    const stroopTestAnswers = JSON.parse(this.localStorage.get('stroopTestAnswers'));
    const firstStepForm = JSON.parse(this.localStorage.get('firstStepForm'));
    const tmtAnswers = JSON.parse(this.localStorage.get('tmtAnswer'));
    const tmtSecondAnswers = JSON.parse(this.localStorage.get('tmtSecondAnswers'));
    const finalObject = {
      stroopTestAnswers,
      demoDataForm: firstStepForm,
      tmtFirstStageAnswers: tmtAnswers,
      tmtSecondStageAnswers: tmtSecondAnswers,
    };
    this.http.post('http://test.com', finalObject).subscribe()
  }
}
