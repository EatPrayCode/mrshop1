import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTermsModalComponent } from './accept-terms-modal.component';

describe('AcceptTermsModalComponent', () => {
  let component: AcceptTermsModalComponent;
  let fixture: ComponentFixture<AcceptTermsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptTermsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptTermsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
