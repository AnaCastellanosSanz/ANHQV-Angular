
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodioRoutingModule } from './episodio-routing.module';
import { EpisodioComponent } from './episodio.component';


@NgModule({
  declarations: [
    EpisodioComponent
  ],
  imports: [
    CommonModule,
    EpisodioRoutingModule,
    RouterModule,
  ]
})
export class EpisodioModule { }
