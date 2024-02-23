import { Injectable } from '@angular/core';
import { BrowserStorageService } from 'src/app/core/services/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;

  constructor(
    private browserStorageService: BrowserStorageService
  ) {
  }

  updateLoginToken(token: string) {
    this.browserStorageService.updateLoginToken(token);
    this.isLogged = true;
  }

  logOut() {
    this.browserStorageService.removeLoginToken();
    this.isLogged = false;
  }
}
