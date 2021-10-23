import { categoriesNavItemsConst, organiserItemsConst } from './../../mock-data/constants';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { categoriesNavItems } from 'src/app/mock-data/app.models';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent {

  rightList: any = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},];
  mainCategory: any = {}
  navItems: categoriesNavItems[] = [];

  selectedNavLink:any = 'home';

  handleNavLinks(navLink: any) { }

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

  ngOnInit(): void {
    this.initialisePage('housekeeping');
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
