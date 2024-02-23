import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  @Output() notifyToggleLoginModal = new EventEmitter();

  constructor(
    private authService: AuthService
  ) {}

  handleToggleModal() {
    this.notifyToggleLoginModal.emit();
  }

  login(socialMedia: string) {
    switch (socialMedia) {
      case 'facebook':
        this.loginWithFacebook();
        break;
      case 'google':
        this.loginWithGoogle();
        break;
      case 'zalo':
        this.loginWithZalo();
        break;
    }
  }

  loginWithGoogle() {
    this.afterSuccessLogin();
    this.authService.updateLoginToken('haha');
  }

  loginWithZalo() {
    this.afterSuccessLogin();
    this.authService.updateLoginToken('haha');
  }

  loginWithFacebook() {
    this.afterSuccessLogin();
    this.authService.updateLoginToken('haha');
  }

  afterSuccessLogin() {
    this.handleToggleModal();
  }
}
