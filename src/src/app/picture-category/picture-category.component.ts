import { Item } from '../item'
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'tr[app-picture-category]',
  templateUrl: './picture-category.component.html',
  styleUrls: ['./picture-category.component.css']
})
export class PictureCategoryComponent implements OnInit, OnChanges {

  columns = 20;

  columnItems: Number[];
  rowItems: Number[];

  @Input() item: Item;

  @Input() filterStr: string;

  images: any[];

  constructor() { }

  ngOnInit() {
    this.populate();
  }

  ngOnChanges() {
    this.populate();
  }

  populate() {
    this.columnItems = Array.apply(null, { length: this.columns }).map(Number.call, Number);
    if (this.filterStr.length >= 3) {
      this.images = this.item.getImages().filter(cur => cur.indexOf(this.filterStr) > -1);
      const size = this.images.length;
      const rows = Math.ceil(size / this.columns);
      this.rowItems = Array.apply(null, { length: rows }).map(Number.call, Number);
    } else {
      this.rowItems = [];
      this.images = this.item.getImages();
    }
    console.log(this.item.getName() + ' ' + this.rowItems.length);
  }

  hasItem(row: number, col: number): boolean {
    const idx = row * this.columns + col;
    return (idx < this.images.length)
  }

  getItem(row: number, col: number): String {
    const idx = row * this.columns + col;
    if (idx < this.images.length) {
      return 'assets/images/' + this.item.getName() + '/' + this.images[idx];
    }
    return '';
  }
}
