import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseItemsTableComponent } from './customise-items-table.component';

describe('CustomiseItemsTableComponent', () => {
  let component: CustomiseItemsTableComponent;
  let fixture: ComponentFixture<CustomiseItemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomiseItemsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
