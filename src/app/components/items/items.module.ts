import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items.component';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  declarations: [
    ItemComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    ItemRoutingModule,
  ],
})
export class ItemsModule {}
