import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './card-list/hero-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const heroesRoutes: Routes = [
  { path: 'cards', redirectTo: '/cards' },
  { path: 'card/:id', redirectTo: '/card/:id' },
  { path: 'cards',  component: HeroListComponent, data: { animation: 'cards' } },
  { path: 'card/:id', component: CardDetailComponent, data: { animation: 'card' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CardRoutingModule { }
