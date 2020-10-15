import { NgModule } from '@angular/core';
import { MasonryListComponent } from './masonry-list.component';
import { DynamicallyRowRangeDirective } from './dynamically-row-range.directive';
import { CommonModule } from '@angular/common';

@NgModule({
   imports: [
      CommonModule
   ],
   exports: [
      MasonryListComponent
   ],
   declarations: [
      MasonryListComponent,
      DynamicallyRowRangeDirective
   ]
})
export class MasonryListModule { }
