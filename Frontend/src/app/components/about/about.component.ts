import { Component, OnInit } from '@angular/core';
import { fadeMove, moveCols } from 'src/app/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    fadeMove, moveCols
  ]
})
export class AboutComponent implements OnInit {

  items = [];

  constructor() {
    this.items = ['Hey this is an item', 'Here is another one', 'This is awesome'];
  }

  pushItem() {
    this.items.push('Oh yeah that is awesome');
  }
  removeItem() {
    this.items.pop();
  }
  ngOnInit() {
  }

}
