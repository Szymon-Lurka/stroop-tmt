import { Injectable } from '@angular/core';
import { SendDataService } from './send-data.service';

@Injectable({
  providedIn: 'root',
  useClass: SendDataService
})
export abstract class SendData {
  abstract send(): void;
}
