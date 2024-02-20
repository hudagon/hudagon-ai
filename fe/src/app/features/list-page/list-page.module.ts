import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule
  ]
})
export class ListPageModule { }
