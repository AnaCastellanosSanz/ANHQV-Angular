import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/pages/shared/shared.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    CharacterListRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CharacterListModule { }
