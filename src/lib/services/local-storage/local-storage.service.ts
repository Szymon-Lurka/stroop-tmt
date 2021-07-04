import { Injectable } from '@angular/core';
import {LocalStorage} from "./local-storage";

@Injectable()
export class LocalStorageService implements LocalStorage{

  get(key: string): string | null {
    return localStorage.getItem(key);
  }
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
