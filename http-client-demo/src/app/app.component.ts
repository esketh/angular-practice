import { Component, OnInit } from '@angular/core';
import { FilmService } from './service/film.service';
import { Film } from './model/film';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-client-demo';
  filmList: Film[] = [];
  newFilm: Film = new Film;
  sortedData: Film[];

  constructor(
    private filmService: FilmService
  ) {
    this.sortedData = this.filmList.slice();
  }

  ngOnInit() {
    this.filmService.getAll().subscribe(
      films => this.filmList = films
    )
  }

  onCreate() {
    this.filmService.create(this.newFilm).subscribe(
      film => {
        this.filmList.push(film);
        this.newFilm = new Film();
      },
      err => console.error(err)
    )
  }

  onUpdate(film: Film){
    this.filmService.update(film).subscribe(
      response => {},
      err => console.error(err)
    )
  }

  onDelete(film: Film){
    this.filmService.remove(film.id).subscribe(
      response => {
        let index = this.filmList.indexOf(film);
        this.filmList.splice(index, 1);
      },
      err => console.error(err)
    )
  }

  sortData(sort: Sort){
    this.filmService.getAll().subscribe(
      response => {
    const data = this.filmList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
  }

  this.sortedData = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active){
      case 'title': return compare(a.title, b.title, isAsc);
      case 'release': return compare(a.release, b.release, isAsc);
      case 'actor': return compare(a.actor, b.actor, isAsc);
      default: return 0;
    }
    });
  }
)
}
}

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }


