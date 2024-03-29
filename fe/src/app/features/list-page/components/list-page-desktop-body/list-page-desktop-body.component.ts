import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { DesktopCartDropdownComponent } from './desktop-cart-dropdown/desktop-cart-dropdown.component';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-list-page-desktop-body',
  templateUrl: './list-page-desktop-body.component.html',
  styleUrls: ['./list-page-desktop-body.component.css']
})
export class ListPageDesktopBodyComponent implements OnInit, AfterViewInit {
  @Output() notifyToggleLoginModal: EventEmitter<string> = new EventEmitter();
  @Output() notifyResetAsideCategory = new EventEmitter();
  @ViewChild('desktopCartDropDown', { read: ViewContainerRef }) container: ViewContainerRef | undefined;
  cartFirsTimehover: boolean = false;

  // DOM ELEMENT
  rightSideBody: any;
  scrollToTopButton: any;
  searchInputDOM: any;

  // Search Sort Info
  searchInput: string = "";
  sortOption: string = 'Sắp xếp';
  isSortOptionShow: boolean = false;
  isSortPristine: boolean = true;

  // SOMETHING ELSE
  displayedCategory: string = "";
  displayedCategoryTitle: string = "";
  isCategoryContentShow: boolean = false;

  constructor(
    private authService: AuthService
  ) {
  }

  ngAfterViewInit(): void {
    this.rightSideBody = document.getElementById("right-side-body");
    this.scrollToTopButton = document.getElementById("scroll-to-top");
    this.searchInputDOM = document.getElementById("searchInput");

    this.searchInputDOM?.focus();
  }

  ngOnInit(): void {
  }

  toggleCategoryContent($event: any) {
    if ($event.category == this.displayedCategory) {
      this.turnOffCategoryContent("");
      return;
    }

    this.isCategoryContentShow = true;
    this.displayedCategory = $event.category;

    switch (this.displayedCategory) {
      case "subject":
        this.displayedCategoryTitle = "Chủ thể";
        break;
      case "topic":
        this.displayedCategoryTitle = "Chủ đề";
        break;
      case "style":
        this.displayedCategoryTitle = "Phong cách";
        break;
      case "ratio":
        this.displayedCategoryTitle = "Khung hình";
        break;
      case "color":
        this.displayedCategoryTitle = "Màu sắc";
        break;
    }
  }

  turnOffCategoryContent(returnCSS: string) {
    if (returnCSS !== "") {
      this.notifyResetAsideCategory.emit({ displayedCategory : this.displayedCategory });
    }

    this.isCategoryContentShow = false;
    this.displayedCategory = "";
  }

  resetInput() {
    this.searchInput = "";
    this.searchInputDOM?.focus();
  }

  checkScroll() {
    if (this.rightSideBody.scrollTop >= 120) {
      if (!this.scrollToTopButton?.classList.contains("display")) {
        this.scrollToTopButton?.classList.add("display");
      }
    } else {
      if (this.scrollToTopButton?.classList.contains("display")) {
        this.scrollToTopButton?.classList.remove("display");
      }
    }
  }

  scrollToTop() {
    this.rightSideBody?.scroll({ top: 0, behavior: 'smooth' });
  }

  toggleSortOptions() {
    this.isSortOptionShow = !this.isSortOptionShow;
  }

  toggleSortOptionBlur() {
    if (this.isSortOptionShow) {
      this.isSortOptionShow = !this.isSortOptionShow;
    }
  }

  chooseSortOption(chosen: string) {
    if (chosen !== '') {
      this.sortOption = chosen;
    }
    this.toggleSortOptions();
    this.toggleSortOptions();
  }

  isLogged() {
    return this.authService.isLogged;
  }

  search() {
    console.log('vô');
  }

  loadDesktopCartDropDown() {
    if (!this.cartFirsTimehover) {
      this.container?.createComponent(DesktopCartDropdownComponent);
      this.cartFirsTimehover = true;
    }
  }

  toggleLoginModal() {
    this.notifyToggleLoginModal.emit();
  }
}
