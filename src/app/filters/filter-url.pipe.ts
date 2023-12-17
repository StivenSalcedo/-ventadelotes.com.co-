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
@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], key: string, value: any): any {
   
      return list.filter(i => i[key] === value);
    
   
  }

}
@Pipe({ name: 'orderby',
pure:false})
export class orderByPipe  implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return null;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
