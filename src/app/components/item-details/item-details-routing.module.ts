import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: ItemDetailsComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ItemDetailsRoutingModule {}
