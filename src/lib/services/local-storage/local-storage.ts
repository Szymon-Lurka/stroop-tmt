import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root',
  useClass: LocalStorageService
})
export abstract class LocalStorage {
  abstract set(key: string, value: string): void;

  abstract get(key: string): string;
}
