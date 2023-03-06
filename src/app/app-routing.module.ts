import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/items/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./components/item-details/item-details.module').then(m => m.ItemDetailsModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./components/create-form/create-form.module').then(m => m.CreateFormModule)
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
