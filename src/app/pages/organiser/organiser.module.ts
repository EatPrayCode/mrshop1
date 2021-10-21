import { OrganiserComponent } from './components/organiser/organiser.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { OrganiserRoutingModule } from './organiser-routing.module';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { OrganiserListComponent } from './components/organiser-list/organiser-list.component';
import { ChoosOrganiserCategoriesComponent } from './components/choose-organiser-categories/choose-organiser-categories.component';
import { SidenavService } from '../services/sidenav.service';

@NgModule({
  declarations: [
    OrganiserComponent,
    LeftMenuComponent,
    OrganiserListComponent,
    ChoosOrganiserCategoriesComponent
  ],
  imports: [
    CommonModule,
    OrganiserRoutingModule,
    SharedModule,
  ],
  exports: [
    OrganiserComponent,
    LeftMenuComponent,
    OrganiserListComponent,
    ChoosOrganiserCategoriesComponent
  ],
  providers: [ SidenavService ],
})
export class OrganiserModule { }
