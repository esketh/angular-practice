import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  jsonUrl: string = "http://localhost:3000/heroes";
  constructor(private http: HttpClient) { }

getAll(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.jsonUrl);
}

getOne(id: string | number): Observable<Hero>  {
  return this.http.get<Hero>(`${this.jsonUrl}/${id}`);
}

}
