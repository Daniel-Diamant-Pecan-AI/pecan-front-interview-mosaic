import {Injectable} from '@angular/core';
import {TileInterface} from './tile.interface';
import {SyncStoreService} from '../store-services/sync-store.service';
import {initMosaicData} from '../../mocks/init-mosaic-data';

const mosaicLocalStorageKey = 'MOSAIC_DATA';

@Injectable({
  providedIn: 'root'
})
export class MosaicDataService {

  constructor(private store: SyncStoreService) {
  }

  get(): TileInterface[] {
    return this.store.get(mosaicLocalStorageKey) || initMosaicData;
  }

  set(data: TileInterface[]): void {
    this.store.set(mosaicLocalStorageKey, data);
  }
}
