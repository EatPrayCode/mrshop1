import { AuthModule } from './../core/auth/auth.module';
import { CustomisePackModule } from './customise-pack/customise-pack.module';
import { SubmitPropertyModule } from './../pages/submit-property/submit-property.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlankComponent } from './blank/blank.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    // CoreModule,
    AuthModule,
    CustomisePackModule
  ],
  exports: []
})
export class LayoutsModule { }
