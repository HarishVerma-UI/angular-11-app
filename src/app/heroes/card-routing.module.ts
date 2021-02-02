import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const heroesRoutes: Routes = [
  { path: 'cards', redirectTo: '/cards' },
  { path: 'card/:id', redirectTo: '/card/:id' },
  { path: 'cards',  component: CardListComponent, data: { animation: 'cards' } },
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
