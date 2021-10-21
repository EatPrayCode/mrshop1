import { organiserItemsConst } from '../../../../mock-data/constants';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';
import { categoriesNavItems } from 'src/app/mock-data/app.models';
import { StateService } from 'src/app/pages/services/state.service';
import { DataService } from 'src/app/pages/services/data.service';

@Component({
  selector: 'app-choose-organiser-categories',
  templateUrl: './choose-organiser-categories.component.html',
  styleUrls: ['./choose-organiser-categories.component.scss']
})
export class ChoosOrganiserCategoriesComponent implements OnInit, AfterViewInit, OnDestroy {

  mainCategory: any = {}
  subCategory: any = {};
  navigationSubscription:any;
  appLoader: any = true;
  navItems: categoriesNavItems[] = [];
  packsList: any = [];
  showDetailed: any = true;
  complexLinks: any[] = organiserItemsConst;

  public sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
  public sort: any;
  public counts = [12, 24, 36];
  public count: any;

  @ViewChild('sidenav1', { read: MatSidenav, static: true })
  sidenav1!: MatSidenav;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public stateService: StateService,
    public dataService: DataService
  ) { }

  initialisePage(categoryName: any) {
    this.loadCategories({}).subscribe(res => {
      this.navItems = res;
      this.appLoader = false;
      const category = this.navItems[0].route;
      this.mainCategory = {};
      this.subCategory = {};
      const mainCategory_ = this.navItems.filter(ele => {
        return ele.route == category;
      });
      this.mainCategory = mainCategory_[0];
    });
  }

  ngOnInit(): void {
    this.initialisePage('housekeeping');
    this.count = this.counts[0];
    this.sort = this.sortings[0];
  }

  toggleDetail() {
    this.showDetailed = !this.showDetailed;
  }

  loadCategories(payload: any) {
    const organiserItems = organiserItemsConst;
    return of(organiserItems).pipe(delay(300));
  }

  handleViewPack(event: any) {
    this.exploreAllPacks(this.subCategory);
  }

  openPackSummaryDialog(pack: any): void {
    // let dialogRef = this.dialog.open(PackSummaryDialogComponent, {
    //   hasBackdrop: true,
    //   disableClose: false,
    //   height: '100vh',
    //   minWidth: '50%',
    //   position: {
    //     right: '0px',
    //     bottom: '0px',
    //   },
    //   data: {
    //     pack: pack
    //   }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  explorePack(pack: any) {
    console.log(pack);
    const subCat = this.subCategory.displayName;
    const packId = pack.id;
    this.router.navigate([`/${subCat}/${packId}`]);
  }

  exploreAllPacks(subCategory: any) {
    this.router.navigate([`/${subCategory.displayName}`]);
  }

  ngAfterViewInit() { }

  closeMainCategoryNav() {
    this.sidenav1.close();
  }

  selectMainCategory(item: any) {
    const category = item.route;
    this.mainCategory = {};
    this.subCategory = {};
    const mainCategory_ = this.navItems.filter(ele => {
      return ele.route == category;
    });
    this.mainCategory = item;
  }

  selectSubCategory(item: any) {
    this.subCategory = item;
  }

  viewDetailPack(pack: any) {
    this.router.navigate([`${pack.id}`], { relativeTo: this.route });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
