import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssettypesComponent } from './addassettypes.component';

describe('AssettypesComponent', () => {
  let component: AssettypesComponent;
  let fixture: ComponentFixture<AssettypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssettypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssettypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
