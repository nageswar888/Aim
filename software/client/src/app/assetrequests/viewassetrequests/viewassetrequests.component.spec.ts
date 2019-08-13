import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassetrequestsComponent } from './viewassetrequests.component';

describe('ViewassetrequestsComponent', () => {
  let component: ViewassetrequestsComponent;
  let fixture: ComponentFixture<ViewassetrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassetrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassetrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
