import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], arg: any): any {
    if (arg.length < 3) {
      return items;
    }
    console.log(arg);
    return items.filter(item => this.hasMatch(item.getImages(), arg));
  }

  hasMatch(images: any[], filter: any): boolean {
    for (const img of images) {
      if (img.indexOf(filter) !== -1) {
        return true;
      }
    }
    return false;
  }

}
