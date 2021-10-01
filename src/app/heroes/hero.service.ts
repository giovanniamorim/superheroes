import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../message-service.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    
  }

}
