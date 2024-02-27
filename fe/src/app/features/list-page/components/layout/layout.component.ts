import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaQueriesService } from 'src/app/core/services/media-queries.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isContentLoaded: boolean = true;
  isLoginModalOpen: boolean = false;

  constructor(
    private mediaQueriesService: MediaQueriesService,
    private changeDectector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

  }

  getBreakpointValues(screen: string) {
    return this.mediaQueriesService.breakPointMap.get(screen);
  }

  getViewportWidth() {
    return this.mediaQueriesService.viewportWidth;
  }

  handleToggleLoginModal() {
    console.log('vô');
    this.isLoginModalOpen = !this.isLoginModalOpen;
    this.changeDectector.markForCheck();
  }
}
