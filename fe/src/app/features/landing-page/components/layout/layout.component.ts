import { Component, OnInit } from '@angular/core';
import { MediaQueriesService } from 'src/app/core/services/media-queries.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLoginModalOpen: boolean = false;

  constructor(
    private mediaQueriesService: MediaQueriesService
  ) {
  }

  ngOnInit(): void {
  }

  handleToggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;
  }

  getBreakpointValues(screen: string) {
    return this.mediaQueriesService.breakPointMap.get(screen);
  }

  getViewportWidth() {
    return this.mediaQueriesService.viewportWidth;
  }
}
