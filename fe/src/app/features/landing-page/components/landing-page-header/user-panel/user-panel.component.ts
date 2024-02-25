import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {

  constructor(
    private authService: AuthService,
  ) {
  }

  logOut() {
    this.authService.logOut();
  }

  getUserFullName() {
    return this.authService.getUserFullName();
  }

  getUserAvatar() {
    return this.authService.getUserAvatar();
  }
}
