import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details.component';
import { ItemDetailsRoutingModule } from './item-details-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ItemDetailsRoutingModule
  ],
})
export class ItemDetailsModule { }
