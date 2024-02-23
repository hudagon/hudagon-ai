import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {
  @Output() notifyToggleModal = new EventEmitter();

  toggleModal() {
    this.notifyToggleModal.emit();
  }
}
