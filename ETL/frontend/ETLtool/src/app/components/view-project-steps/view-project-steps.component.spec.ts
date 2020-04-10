import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectStepsComponent } from './view-project-steps.component';

describe('ViewProjectStepsComponent', () => {
  let component: ViewProjectStepsComponent;
  let fixture: ComponentFixture<ViewProjectStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjectStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
