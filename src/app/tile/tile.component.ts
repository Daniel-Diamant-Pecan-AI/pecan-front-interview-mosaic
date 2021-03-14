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

  move(xOffset: number = 0, yOffset: number = 0) {
    this.x = this.x + xOffset;
    this.y = this.y + yOffset;
  }

  up() {
    this.move(0, -1);
  }

  left() {
    this.move(-1, 0);
  }

  right() {
    this.move(1, 0);
  }

  down() {
    this.move(0, 1);
  }

}
