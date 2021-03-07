import {Component} from '@angular/core';
import {tilesData} from './tiles-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cubes = tilesData;
}
