import {Component} from '@angular/core';
import {Tile} from './mosaic/types/tile';
import {initMosaicData} from './services/init-mosaic-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tiles: Tile[];

  constructor() {
    this.tiles = initMosaicData;
  }

}
