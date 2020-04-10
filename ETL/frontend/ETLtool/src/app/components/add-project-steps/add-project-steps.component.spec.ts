import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectStepsComponent } from './add-project-steps.component';

describe('AddProjectStepsComponent', () => {
  let component: AddProjectStepsComponent;
  let fixture: ComponentFixture<AddProjectStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
