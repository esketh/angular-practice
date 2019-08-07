import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { Film } from '../model/film';
import { FilmService } from '../service/film.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(baseArray: any, phrase: string = ''): any {
    return baseArray.filter( item => {
      let jsonString = JSON.stringify(item).replace(/"[^"]*"\:/g, '').replace(/[",\{\}]/g, '');
      return item.title.toLowerCase().indexOf(phrase.toLowerCase()) > -1
    });
  }

}
