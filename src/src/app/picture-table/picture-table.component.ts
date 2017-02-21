import { PictureService } from '../picture.service'
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-picture-table',
  templateUrl: './picture-table.component.html',
  styleUrls: ['./picture-table.component.css'],
  providers: [PictureService]
})
export class PictureTableComponent implements OnInit {

  private pictures: any[];
  private items: any[];
  private filterStr = '';

  constructor(private pictureService: PictureService) {
    this.pictures = pictureService.getPictures();
    for (const item in this.pictures) {
      if (this.pictures.hasOwnProperty(item)) {
        this.items = this.pictures.map(x => new Item(this.getName(x), this.getValue(x)));
      }
    }
  }

  getName(x) {
    for (const prop in x) {
      if (x.hasOwnProperty(prop)) {
        return prop;
      }
    }
    return '';
  }

  getValue(x) {
    return x[this.getName(x)];
  }
  ngOnInit() {
  }

  onKey(event: any) {
    this.filterStr = event.target.value;
  }

}
