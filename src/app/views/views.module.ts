import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkBuilderViewComponent } from './network-builder-view/network-builder-view.component';
import { DataEntryViewComponent } from './data-entry-view/data-entry-view.component';



@NgModule({
  declarations: [NetworkBuilderViewComponent, DataEntryViewComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
