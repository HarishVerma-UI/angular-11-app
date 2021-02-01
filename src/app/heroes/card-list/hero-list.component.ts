// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardService } from '../card.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  cardsList$: Observable<any[]>;
  searchText: string;

  constructor(
    private service: CardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cardsList$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getHeroes();
      })
    );
  }
}
