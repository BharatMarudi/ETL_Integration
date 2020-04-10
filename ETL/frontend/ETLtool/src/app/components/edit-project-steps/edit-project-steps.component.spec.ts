import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectStepsComponent } from './edit-project-steps.component';

describe('EditProjectStepsComponent', () => {
  let component: EditProjectStepsComponent;
  let fixture: ComponentFixture<EditProjectStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
