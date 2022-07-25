import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpartComponent } from './editpart.component';

describe('EditpartComponent', () => {
  let component: EditpartComponent;
  let fixture: ComponentFixture<EditpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
