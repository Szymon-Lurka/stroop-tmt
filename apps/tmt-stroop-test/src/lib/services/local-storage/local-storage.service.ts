import { Injectable } from '@angular/core';
import { LocalStorage } from './local-storage';

@Injectable()
export class LocalStorageService implements LocalStorage {

  get(key: string): string {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key) as string;
    }
    return '';
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  clear() {
    localStorage.clear();
  }
}
