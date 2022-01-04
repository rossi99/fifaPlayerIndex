import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchAgainst: string, searchText: string): any[] {

    if (!items) {
      return [];
    }

    if (!searchText) {
      return [];
    }

    return items.filter(it => {
      return it[searchAgainst] && it[searchAgainst].includes(searchText);
    });
  }
}
