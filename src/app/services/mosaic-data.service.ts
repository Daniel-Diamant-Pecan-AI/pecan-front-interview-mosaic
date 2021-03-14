import {Injectable} from '@angular/core';
import {TileInterface} from '../tile.interface';
import {SyncStoreService} from '../../store-services/sync-store.service';

const mosaicLocalStorageKey = 'MOSAIC_DATA';

export const initTiles: TileInterface[] = [
  {x: 0, y: 0, color: 'green'},
  {x: 0, y: 1, color: 'red'},
  {x: 1, y: 1, color: 'blue'},
  {x: 1, y: 2, color: 'yellow'},
  {x: 2, y: 1, color: 'cyan'},
  {x: 2, y: 2, color: 'pink'},
  {x: 0, y: 3, color: 'purple'},
];

@Injectable({
  providedIn: 'root'
})
export class MosaicDataService {

  constructor(private store: SyncStoreService) {
  }

  get(): TileInterface[] {
    return this.store.get(mosaicLocalStorageKey) || initTiles;
  }

  set(data: TileInterface[]): void {
    this.store.set(mosaicLocalStorageKey, data);
  }
}
