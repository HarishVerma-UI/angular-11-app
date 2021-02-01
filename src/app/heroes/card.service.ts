import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { cards } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  constructor() { }

  getHeroes(): Observable<any[]> {
    return of(cards);
  }

  getHero(id: string) {
    return this.getHeroes().pipe(
      map((heroes: any[]) => heroes.find(hero => hero.id === id))
    );
  }
}

