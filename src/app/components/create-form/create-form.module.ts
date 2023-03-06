import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CreateFormComponent } from './create-form.component';
import { CreateFormRoutingModule } from './create-form-routing.module';

@NgModule({
  declarations: [
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CreateFormRoutingModule,
    MatButtonModule
  ],
})
export class CreateFormModule {}
