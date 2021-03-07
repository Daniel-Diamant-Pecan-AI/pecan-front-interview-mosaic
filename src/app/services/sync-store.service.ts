import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyncStoreService {

  get(key: string) {
    const stored = localStorage.getItem(key);
    return JSON.parse(stored);
  }

  set(key: string, data: any) {
    const toStore = JSON.stringify(data);
    localStorage.setItem(key, toStore);
  }
}
