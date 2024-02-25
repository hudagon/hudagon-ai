import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  @Output() notifyToggleLoginModal = new EventEmitter();
  user: SocialUser | undefined;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        this.authService.login(user);
        this.handleToggleModal();
      }
    });
  }

  handleToggleModal() {
    this.notifyToggleLoginModal.emit();
  }

  afterSuccessLogin() {
    this.handleToggleModal();
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }
}
