import {Component} from '@angular/core';
import {TileInterface} from './tile.interface';

export const initTiles: TileInterface[] = [
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
  public tiles: TileInterface[];

  constructor() {
    this.tiles = initTiles;
  }
}
