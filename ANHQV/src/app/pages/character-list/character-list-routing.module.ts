import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list.component';


const routes: Routes = [
  {
    //Path va vacío ya que en el app-routing-module le has indicado que el path es "character-list"
      path: '',
      component: CharacterListComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterListRoutingModule { }
