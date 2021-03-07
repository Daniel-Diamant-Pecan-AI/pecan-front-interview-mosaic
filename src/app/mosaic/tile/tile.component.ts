import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() color: string;
  @Input() x: number;
  @Input() y: number;

  public stepSize = 150;

  constructor() {
  }

  ngOnInit(): void {
  }

  up() {
    this.y = this.y - 1;
  }

  left() {
    this.x = this.x - 1;
  }

  right() {
    this.x = this.x + 1;
  }

  down() {
    this.y = this.y + 1;
  }

}
