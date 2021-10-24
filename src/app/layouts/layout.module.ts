import { CustomisePackModule } from './customise-pack/customise-pack.module';
import { SubmitPropertyModule } from './../pages/submit-property/submit-property.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    CustomisePackModule
  ],
  exports: []
})
export class LayoutsModule { }
