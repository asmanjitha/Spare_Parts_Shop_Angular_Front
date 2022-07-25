import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpartcardComponent } from './editpartcard.component';

describe('EditpartcardComponent', () => {
  let component: EditpartcardComponent;
  let fixture: ComponentFixture<EditpartcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpartcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpartcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
