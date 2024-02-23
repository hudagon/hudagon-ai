import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';

@NgModule({
  declarations: [
    OverlayComponent,
    HamburgerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OverlayComponent, HamburgerComponent]
})
export class MainSharedModule { }
