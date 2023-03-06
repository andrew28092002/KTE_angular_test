import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details.component';
import { ItemDetailsRoutingModule } from './item-details-routing.module';



@NgModule({
  declarations: [
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,
    ItemDetailsRoutingModule
  ],
})
export class ItemDetailsModule { }
