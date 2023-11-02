import { Pipe, PipeTransform } from '@angular/core';
import { Url } from './url';

@Pipe({
  name: 'filterUrl'
})
export class FilterUrlPipe implements PipeTransform {

  transform(items: Url[], filter: Url): Url[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Url) => this.applyFilter(item, filter));
  }

  applyFilter(book: Url, filter: Url): boolean {
    for (let field in filter) {
     // console.log(filter[field]);
     // if (filter[field]) {
        if (typeof filter[field] === 'string') {
         // console.log('typeof filter[field]');
          if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
         // console.log('typeof filter[field]');
          if (book[field] !== filter[field]) {
            return false;
          }
        }
        else if (typeof filter[field] === 'boolean') {
          if (book[field] !== filter[field]) {
            return false;
          }
          
        }
        
     // }
      
    }
    return true;
  }

}
