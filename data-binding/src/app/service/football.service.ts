import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  jsonUrl: string = "Users\Training\Documents\11hét\Angular\angular-practice\";

  constructor(private http: HttpClient) { 
    this.http.get(this.jsonUrl).subscribe(
      list => console.log('football list', list),
      error => console.error(error),
      () => console.log('complete')
    )
  }
}
