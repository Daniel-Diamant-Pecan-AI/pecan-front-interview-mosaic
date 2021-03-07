import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
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
