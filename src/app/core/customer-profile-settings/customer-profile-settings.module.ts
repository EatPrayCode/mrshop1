import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChooseAppSettingsModalComponent } from './components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ChooseAppSettingsModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ChooseAppSettingsModalComponent
  ]
})
export class CustomerProfileSettingsModule { }
