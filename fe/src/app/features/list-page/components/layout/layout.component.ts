import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MediaQueriesService } from 'src/app/core/services/media-queries.service';
import { ListPageDesktopBodyComponent } from '../list-page-desktop-body/list-page-desktop-body.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('listPageDesktopBody', {static: false}) listPageDesktopBody: ListPageDesktopBodyComponent | undefined;

  isContentLoaded: boolean = true;
  isLoginModalOpen: boolean = false;

  constructor(
    private mediaQueriesService: MediaQueriesService,
    private changeDectector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

  }

  handleToggleCategoryContent($event: any) {
    if (this.listPageDesktopBody) {
      this.listPageDesktopBody.toggleCategoryContent($event);
    }
  }

  getBreakpointValues(screen: string) {
    return this.mediaQueriesService.breakPointMap.get(screen);
  }

  getViewportWidth() {
    return this.mediaQueriesService.viewportWidth;
  }

  handleToggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;
    this.changeDectector.markForCheck();
  }
}
