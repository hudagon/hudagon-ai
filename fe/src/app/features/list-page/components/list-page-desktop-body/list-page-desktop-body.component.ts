import { Component, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { DesktopCartDropdownComponent } from './desktop-cart-dropdown/desktop-cart-dropdown.component';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-list-page-desktop-body',
  templateUrl: './list-page-desktop-body.component.html',
  styleUrls: ['./list-page-desktop-body.component.css']
})
export class ListPageDesktopBodyComponent implements OnInit{
  @Output() notifyToggleLoginModal: EventEmitter<string> = new EventEmitter();
  @ViewChild('desktopCartDropDown', { read: ViewContainerRef }) container: ViewContainerRef | undefined;
  cartFirsTimehover: boolean = false;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    document.getElementById("searchInput")?.focus();  
  }

  isLogged() {
    return this.authService.isLogged;
  }

  search() {
    console.log('vô');
  }

  loadDesktopCartDropDown() {
    if(!this.cartFirsTimehover) {
      this.container?.createComponent(DesktopCartDropdownComponent);
      this.cartFirsTimehover = true;
    }
  }

  toggleLoginModal() {
    this.notifyToggleLoginModal.emit();
  }
}
