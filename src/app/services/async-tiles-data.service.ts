import {Injectable} from '@angular/core';
import {TileInterface} from '../tile.interface';
import {AsyncStoreService} from "../../store-services/async-store.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const tilesLocalStorageKey = 'TILES_DATA';

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
export class AsyncTilesDataService {

  constructor(private store: AsyncStoreService) {
  }

  get(): Observable<TileInterface[]> {
    return this.store.get(tilesLocalStorageKey)
      .pipe(map(res => res ?? initTiles));
  }

  set(data: TileInterface[]): Observable<void> {
    return this.store.set(tilesLocalStorageKey, data);
  }
}
