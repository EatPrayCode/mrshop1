import { PaymentPacksComponent } from './components/payment-packs/payment-packs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';  
import { SharedModule } from '../../shared/shared.module';

export const routes = [
  { path: '', component: PaymentPacksComponent, pathMatch: 'full' },
  { path: ':id', component: PaymentPacksComponent }
];

@NgModule({
  declarations: [
    PaymentPacksComponent, 
    PaymentPacksComponent
  ],
  exports: [
    PaymentPacksComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule,
    SharedModule
  ]
})
export class OrganiserModule { }
