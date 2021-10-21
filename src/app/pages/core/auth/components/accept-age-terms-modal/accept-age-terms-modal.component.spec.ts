import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptAgeTermsModalComponent } from './accept-age-terms-modal.component';

describe('AcceptAgeTermsModalComponent', () => {
  let component: AcceptAgeTermsModalComponent;
  let fixture: ComponentFixture<AcceptAgeTermsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptAgeTermsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptAgeTermsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
