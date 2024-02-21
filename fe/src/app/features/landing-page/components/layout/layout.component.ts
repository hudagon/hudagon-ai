import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointsMap } from 'src/app/core/constants/breakPoints';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  breakPointMap: Map<string, number> = new Map();
  viewportWidth: number = 0;

  ngOnInit(): void {
    this.breakPointMap = BreakpointsMap;
    this.setViewportBreakpoint(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setViewportBreakpoint(event.target.innerWidth);
  }

  setViewportBreakpoint(width: number) {
    this.viewportWidth = width;
  }
}
