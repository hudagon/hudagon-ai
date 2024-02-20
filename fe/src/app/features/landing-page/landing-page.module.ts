import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TopInfoComponent } from './components/top-info/top-info.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopInfoComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
