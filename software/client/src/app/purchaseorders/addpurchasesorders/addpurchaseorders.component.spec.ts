import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchaseordersComponent } from './addpurchaseorders.component';

describe('AddpurchaseordersComponent', () => {
  let component: AddpurchaseordersComponent;
  let fixture: ComponentFixture<AddpurchaseordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpurchaseordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpurchaseordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
