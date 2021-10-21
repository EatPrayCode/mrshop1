import { ChoosOrganiserCategoriesComponent } from '../choose-organiser-categories/choose-organiser-categories.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { onSideNavChange, animateText, onMainContentChange } from '../../animations/animations';
import { of } from 'rxjs';
import { categoriesNavItems } from 'src/app/mock-data/app.models';
import { categoriesNavItemsConst } from 'src/app/mock-data/constants';
import { SidenavService } from 'src/app/pages/services/sidenav.service';

@Component({
  selector: 'app-organiser',
  templateUrl: './organiser.component.html',
  styleUrls: ['./organiser.component.scss'],
  animations: [onSideNavChange, animateText, onMainContentChange]
})
export class OrganiserComponent implements OnInit {

  public onSideNavChange: boolean = false;

  constructor(
    private _sidenavService: SidenavService
    ,
    private observer: BreakpointObserver,
    public dialog: MatDialog,
  ) {
    this._sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    });
  }

  ngOnInit(): void {
    this.initialisePage('housekeeping');
  }

  handleAddTaskToList(task: any) {
    // this.appService.addSampleToCart(task);
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {

        } else {

        }
      });
  }

  gotoPacks() {

  }

  gotoServices() {

  }

  openPackSummaryDialog(pack: any): void {
    let dialogRef = this.dialog.open(ChoosOrganiserCategoriesComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '85%',
      maxWidth: '85%',
      position: {
        right: '0px',
        bottom: '0px',
      },
      data: {
        pack: pack
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rightList: any = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},];
   
  mainCategory: any = {}
  navItems: categoriesNavItems[] = [];

  initialisePage(categoryName: any) {
    this.loadCategories({}).subscribe(res => {
      this.navItems = res;
      const mainCategory_ = this.navItems.filter(ele => {
        return ele.route == categoryName;
      });
      this.rightList = mainCategory_[0].children;
      this.mainCategory = mainCategory_;
    });
  }

  loadCategories(payload: any) {
    const obs$ = categoriesNavItemsConst;
    return of(obs$).pipe(delay(300));
  }

  selectMainCategory(item: any) {
    const category = item.route;
    this.mainCategory = {};
    const mainCategory_ = this.navItems.filter(ele => {
      return ele.route == category;
    });
    this.mainCategory = item;
    this.rightList = mainCategory_[0].children;
  }


}
