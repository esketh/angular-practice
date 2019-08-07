import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(baseArray: any, phrase: string = ''): any {
    return baseArray.filter( item => {
      return item.title.toLowerCase().indexOf(phrase.toLowerCase()) > -1
    });
  }

}
