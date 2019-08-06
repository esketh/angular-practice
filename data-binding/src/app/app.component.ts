import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { Observable } from 'rxjs';
import { FootballService } from './service/football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-practice-001';
  heroes: Hero[] = [
  { name: "Bombasto", address: "NYC", superpower: "can explode" },
  { name: "Iceman", address: "NYC", superpower: "can froze" },
  { name: "Captain Planet", address: "Budapest", superpower: "homoalcoholicus" },
  { name: "Magneto", address: "NYC", superpower: "magnetic"},
  ];

  listObservable: Observable<any>;

  selectedHero: Hero = this.heroes[0];

  selectHero(hero : Hero): void {
    this.selectedHero = hero;
  }

  heroChanged(hero : Hero): void {
    console.log('Changed hero:', hero);
  }
  // myHero : Hero = {
  //   name: 'Magneto',
  //   address: 'NYC',
  //   superpower: 'magnetic'
  // };

  // getName():string {
  //   return `Bond, James Bond`;
  //}

// names: string[] = [
//   'Sanyi',
//   'Laci',
//   'Vali'
// ];

// name: string;
// disabled: boolean = false;

constructor(
  private fService: FootballService
) {
this.listObservable = new Observable( observer => {
  let to = setTimeout( () => {
    observer.next('Megjöttem...');
  }, 15000);

  let to2 = setTimeout( () => {
    observer.complete();
  }, 20000);
});

this.listObservable.subscribe(
  value => console.log(value),
  error => console.error(error),
  () => console.log('complete')
);

//   this.name = this.names[0];
//   setInterval( () => {
//     let index: number = Math.floor(Math.random()*this.names.length);
//     this.name = this.names[index];
//     this.disabled = !this.disabled;
//   }, 2000);
}

// setName(name): void {
//   this.name = name;
//   }
}