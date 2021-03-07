import {Component, Input, OnInit} from '@angular/core';
import {Tile} from '../types/tile';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.scss']
})
export class MosaicComponent implements OnInit {
  @Input() cubes: Tile[];

  constructor() { }

  ngOnInit(): void {
  }

}
