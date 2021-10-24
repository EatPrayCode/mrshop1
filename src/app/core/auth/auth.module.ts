import { SigninMobileComponent } from './components/signin-mobile/signin-mobile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceptTermsModalComponent } from './components/accept-terms-modal/accept-terms-modal.component';
import { AcceptAgeTermsModalComponent } from './components/accept-age-terms-modal/accept-age-terms-modal.component';
import { ChooseAppSettingsModalComponent } from './components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    SigninComponent,
    SigninMobileComponent,
    AcceptTermsModalComponent,
    AcceptAgeTermsModalComponent,
    ChooseAppSettingsModalComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SigninComponent,
    SigninMobileComponent,
    AcceptTermsModalComponent,
    AcceptAgeTermsModalComponent,
    ChooseAppSettingsModalComponent
  ]
})
export class AuthModule { }
