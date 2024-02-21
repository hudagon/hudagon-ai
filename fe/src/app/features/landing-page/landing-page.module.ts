import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TopInfoComponent } from './components/top-info/top-info.component';
import { LandingPageHeaderComponent } from './components/landing-page-header/landing-page-header.component';
import { LandingPageDesktopBodyComponent } from './components/landing-page-desktop-body/landing-page-desktop-body.component';
import { LandingPageTabletBodyComponent } from './components/landing-page-tablet-body/landing-page-tablet-body.component';
import { LandingPageMobileBodyComponent } from './components/landing-page-mobile-body/landing-page-mobile-body.component';
import { LandingPageFrameComponent } from './components/landing-page-frame/landing-page-frame.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopInfoComponent,
    LandingPageHeaderComponent,
    LandingPageDesktopBodyComponent,
    LandingPageTabletBodyComponent,
    LandingPageMobileBodyComponent,
    LandingPageFrameComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
