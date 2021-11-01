import { OrganiserComponent } from './components/organiser/organiser.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';  
import { SharedModule } from '../../shared/shared.module';

export const routes = [
  { path: '', component: OrganiserComponent, pathMatch: 'full' },
  { path: ':id', component: OrganiserComponent }
];

@NgModule({
  declarations: [
    OrganiserComponent
  ],
  exports: [
    OrganiserComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule,
    SharedModule
  ]
})
export class OrganiserModule { }
