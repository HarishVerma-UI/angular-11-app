import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardRoutingModule,
  ],
  declarations: [
    CardListComponent,
    CardDetailComponent,
  ]
})
export class CardModule {}
