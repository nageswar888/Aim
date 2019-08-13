import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinvoicesComponent } from './addinvoices.component';

describe('AddinvoicesComponent', () => {
  let component: AddinvoicesComponent;
  let fixture: ComponentFixture<AddinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
