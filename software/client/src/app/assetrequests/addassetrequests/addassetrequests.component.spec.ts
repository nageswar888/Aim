import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassetrequestsComponent } from './addassetrequests.component';

describe('AddassetrequestsComponent', () => {
  let component: AddassetrequestsComponent;
  let fixture: ComponentFixture<AddassetrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddassetrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassetrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
