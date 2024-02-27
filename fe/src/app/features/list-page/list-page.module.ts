import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListPageDesktopSideBarComponent } from './components/list-page-desktop-side-bar/list-page-desktop-side-bar.component';
import { ListPageTabletSideBarComponent } from './components/list-page-tablet-side-bar/list-page-tablet-side-bar.component';
import { MainSharedModule } from 'src/app/shareds/main-shared/main-shared.module';
import { ListPageDesktopBodyComponent } from './components/list-page-desktop-body/list-page-desktop-body.component';
import { DesktopCartDropdownComponent } from './components/list-page-desktop-body/desktop-cart-dropdown/desktop-cart-dropdown.component';
import { AuthModule } from 'src/app/auth/auth.module';

@NgModule({
  declarations: [
    LayoutComponent,
    ListPageDesktopSideBarComponent,
    ListPageTabletSideBarComponent,
    ListPageDesktopBodyComponent,
    DesktopCartDropdownComponent,
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    MainSharedModule,
    AuthModule
  ],
})
export class ListPageModule { }
