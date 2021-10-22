import { Injectable } from '@angular/core';
import { SendData } from './send-data';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '../local-storage/local-storage';
import { DataForBackend } from '../../models/data-for-backend';

@Injectable()
export class SendDataService implements SendData {

  constructor(private http: HttpClient, private localStorage: LocalStorage) {
  }

  send() {
    this.http.post('/services/save', this.prepareData()).subscribe();
  }

  private prepareData(): DataForBackend {
    const tmtAnswers = JSON.parse(this.localStorage.get('tmtAnswer'));
    const tmtSecondAnswers = JSON.parse(this.localStorage.get('tmtSecondAnswers'));
    const tmtErrors = JSON.parse(this.localStorage.get('tmtErrors'));
    const tmtSecondErrors = JSON.parse(this.localStorage.get('tmtSecondErrors'));
    const welcomeForm = JSON.parse(this.localStorage.get('welcomeForm'));
    const additionalQuestionsForm = JSON.parse(this.localStorage.get('additionalQuestions'));
    const stroopTestAnswers = JSON.parse(this.localStorage.get('stroopTestAnswers'));
    return {
      tmtAnswers,
      tmtSecondAnswers,
      tmtErrors,
      tmtSecondErrors,
      welcomeForm,
      additionalQuestionsForm,
      stroopTestAnswers
    };
  }
}
