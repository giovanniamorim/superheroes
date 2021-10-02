import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { Hero } from './hero';
import { map } from 'rxjs/operators';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: feteched heroes');
    return heroes;
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.find((hero) => hero.id === +id)!)
    );
  }
}
