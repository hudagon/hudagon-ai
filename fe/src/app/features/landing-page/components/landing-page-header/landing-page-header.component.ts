import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-landing-page-header',
  templateUrl: './landing-page-header.component.html',
  styleUrls: ['./landing-page-header.component.css']
})
export class LandingPageHeaderComponent {
  @Output() notifyToggleLoginModal: EventEmitter<string> = new EventEmitter();

  constructor(
  ) {}

  toggleLoginModal() {
    this.notifyToggleLoginModal.emit();
  }
}
