import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutcardComponent } from './checkoutcard.component';

describe('CheckoutcardComponent', () => {
  let component: CheckoutcardComponent;
  let fixture: ComponentFixture<CheckoutcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
