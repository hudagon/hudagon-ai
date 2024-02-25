import { Component, EventEmitter, Output } from '@angular/core';

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent {
  @Output() notifyLoginWithGoogle: EventEmitter<any> = new EventEmitter<any>();

  createFakeGoogleWrapper = () => {
    const googleLoginWrapper = document.createElement("div");
    googleLoginWrapper.style.display = "none";
    googleLoginWrapper.classList.add("custom-google-button");
    document.body.appendChild(googleLoginWrapper);

    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon',
      width: '200'
    });

    const googleLoginWrapperButton = googleLoginWrapper.querySelector(
      "div[role=button]"
    ) as HTMLElement;

    return {
      click: () => {
        googleLoginWrapperButton?.click();
      }
    }
  }

  handleGoogleLogin() {
    this.notifyLoginWithGoogle.emit(this.createFakeGoogleWrapper());
  }

}
