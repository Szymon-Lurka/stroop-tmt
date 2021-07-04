import {Injectable} from "@angular/core";
import {SaveFormToLocalStorageService} from "./save-form-to-local-storage.service";

@Injectable({
  providedIn: 'root',
  useClass: SaveFormToLocalStorageService
})
export abstract class SaveFormToLocalStorage {
  abstract save(): void;
}
