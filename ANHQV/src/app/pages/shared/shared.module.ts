import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/search/filter.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    PaginationPipe,
    PaginationComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    PaginationPipe,
    PaginationComponent,
  ]
})
export class SharedModule { }
