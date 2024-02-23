import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainSharedModule } from "../shareds/main-shared/main-shared.module";


@NgModule({
    declarations: [
        LoginModalComponent,
        RegisterModalComponent,
        RegisterPageComponent,
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MainSharedModule,
    ],
    exports: [LoginModalComponent]
})
export class AuthModule { }
