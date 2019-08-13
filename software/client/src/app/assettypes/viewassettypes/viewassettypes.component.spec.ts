import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassettypesComponent } from './viewassettypes.component';

describe('ViewassettypesComponent', () => {
  let component: ViewassettypesComponent;
  let fixture: ComponentFixture<ViewassettypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassettypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassettypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
