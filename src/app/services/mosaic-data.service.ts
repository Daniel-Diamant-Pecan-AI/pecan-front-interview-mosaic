import {Injectable} from '@angular/core';
import {Tile} from '../mosaic/types/tile';
import {SyncStoreService} from './sync-store.service';

const mosaicLocalStorageKey = 'MOSAIC_DATA';

@Injectable({
  providedIn: 'root'
})
export class MosaicDataService {

  constructor(private store: SyncStoreService) {
  }

  get(): Tile[] {
    return this.store.get(mosaicLocalStorageKey);
  }

  set(data: Tile[]): void {
    this.store.set(mosaicLocalStorageKey, data);
  }
}
