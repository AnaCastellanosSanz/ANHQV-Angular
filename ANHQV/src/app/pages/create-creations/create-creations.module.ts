import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCreationsRoutingModule } from './create-creations-routing.module';
import { CreateCreationsComponent } from './create-creations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreateCreationsComponent
  ],
  imports: [
    CommonModule,
    CreateCreationsRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CreateCreationsModule { }
