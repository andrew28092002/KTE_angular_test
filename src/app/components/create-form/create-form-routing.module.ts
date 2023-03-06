import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './create-form.component';

const routes: Routes = [
  {
    path: '',
    component: CreateFormComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class CreateFormRoutingModule {}
