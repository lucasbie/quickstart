import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2 class="hero-details">{{hero.name}} details!</h2>
    <div id="heroId"><label>id: </label>{{hero.id}}</div>
    <div id="heroName">
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>`
})

export class HeroDetailComponent {
  @Input() hero: Hero;

}