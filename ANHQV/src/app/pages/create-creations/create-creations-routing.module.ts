import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCreationsComponent } from './create-creations.component';

const routes: Routes = [{
  path: '',
  component: CreateCreationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCreationsRoutingModule { }
