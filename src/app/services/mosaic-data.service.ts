import {Injectable} from '@angular/core';
import {Tile} from '../mosaic/types/tile';
import {SyncStoreService} from './sync-store.service';
import {initMosaicData} from './init-mosaic-data';

const mosaicLocalStorageKey = 'MOSAIC_DATA';

@Injectable({
  providedIn: 'root'
})
export class MosaicDataService {

  constructor(private store: SyncStoreService) {
  }

  get(): Tile[] {
    return this.store.get(mosaicLocalStorageKey) || initMosaicData;
  }

  set(data: Tile[]): void {
    this.store.set(mosaicLocalStorageKey, data);
  }
}
