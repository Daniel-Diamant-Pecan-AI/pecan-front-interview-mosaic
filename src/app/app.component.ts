import {Component} from '@angular/core';
import {Tile} from './mosaic/types/tile';

export const initTiles: Tile[] = [
  {x: 0, y: 0, color: 'green'},
  {x: 0, y: 1, color: 'red'},
  {x: 1, y: 1, color: 'blue'},
  {x: 1, y: 2, color: 'yellow'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tiles: Tile[];

  constructor() {
    this.tiles = initTiles;
  }
}
