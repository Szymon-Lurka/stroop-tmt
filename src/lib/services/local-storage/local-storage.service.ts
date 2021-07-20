import { Injectable } from '@angular/core';
import {LocalStorage} from "./local-storage";

@Injectable()
export class LocalStorageService implements LocalStorage{

  get(key: string): string {
    if (localStorage.getItem(key)) {
      // @ts-ignore
      return localStorage.getItem(key);
    }
    return ''
  }
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
