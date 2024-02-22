import { Component, HostListener, OnInit, Type } from '@angular/core';
import { BreakpointsMap } from 'src/app/core/constants/breakPoints';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLoginModalOpen: boolean = false;
  loginModalComponent: any;

  breakPointMap: Map<string, number> = new Map();
  viewportWidth: number = 0;

  ngOnInit(): void {
    this.breakPointMap = BreakpointsMap;
    this.setViewportBreakpoint(window.innerWidth);
  }
 
  /*#region HANDLE CHANGING VIEWPORT SECTION */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setViewportBreakpoint(event.target.innerWidth);
  }

  setViewportBreakpoint(width: number) {
    this.viewportWidth = width;
  }
  /*#endregion*/

  /*#region TOGGLE LOGIN MODAL SECTION */
  handleToggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;
    this.loadLoginModalComponent();
  }

  async loadLoginModalComponent() {
    if (!this.loginModalComponent) {
      const { LoginModalComponent } = await import('../../../../auth/components/login-modal/login-modal.component');
      this.loginModalComponent = LoginModalComponent;
    }
  }
  /*#endregion*/

}
