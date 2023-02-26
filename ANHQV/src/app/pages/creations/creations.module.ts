import { RouterModule } from '@angular/router';
import { CreationsRoutingModule } from './creations-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationsComponent } from './creations.component';
import { CreationComponent } from './creation/creation.component';



@NgModule({
  declarations: [
    CreationsComponent,
    CreationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CreationsRoutingModule,
    RouterModule
  ]
})
export class CreationsModule { }
