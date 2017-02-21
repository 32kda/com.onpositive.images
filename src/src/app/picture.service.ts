import { Injectable } from '@angular/core';
import pictures from './pictures';

@Injectable()
export class PictureService {

  constructor() { }

  getPictures() {
    return pictures;
  }

}
