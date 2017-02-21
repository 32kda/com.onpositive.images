export class Item {
  name;
  images;

  constructor(name, images) {
    this.name = name;
    this.images = images;
  }
  
  getName() {
    return this.name;
  }
  
  getImages() {
    return this.images;
  }
}