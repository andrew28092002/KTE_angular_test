import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemsComponent } from './components/items/items.component';


const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
  },
  {
    path: ':id',
    component: ItemDetailsComponent
  },
  {
    path: 'create',
    component: CreateFormComponent
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
