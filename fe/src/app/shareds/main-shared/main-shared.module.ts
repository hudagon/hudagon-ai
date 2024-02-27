import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    OverlayComponent,
    HamburgerComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OverlayComponent, HamburgerComponent, SpinnerComponent]
})
export class MainSharedModule { }
