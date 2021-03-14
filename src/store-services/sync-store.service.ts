import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyncStoreService {

  get(key: string): any {
    const stored = localStorage.getItem(key);
    return JSON.parse(stored);
  }

  set(key: string, data: any): void {
    const toStore = JSON.stringify(data);
    localStorage.setItem(key, toStore);
  }
}
