import { Component } from '@angular/core';
import { Hero } from './model/hero';

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
  { name: "Captain Planet", address: "Budapest", superpower: "can save the Earth" },
  ];

  selectedHero: Hero = this.heroes[0];

  selectHero(hero : Hero): void {
    this.selectedHero = hero;
  }
  // myHero : Hero = {
  //   name: 'Magneto',
  //   address: 'NYC',
  //   superpower: 'magnetic'
  };

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

// constructor() {
//   this.name = this.names[0];
//   setInterval( () => {
//     let index: number = Math.floor(Math.random()*this.names.length);
//     this.name = this.names[index];
//     this.disabled = !this.disabled;
//   }, 2000);
// }

// setName(name): void {
//   this.name = name;
//   }
// }