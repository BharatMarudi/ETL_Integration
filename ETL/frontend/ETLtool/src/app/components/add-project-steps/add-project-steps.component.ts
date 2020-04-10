import { Component, OnInit } from '@angular/core';
import { singleStep } from '../../models/add-project-steps-models/step';
import { ProjectstepsService } from '../../services/add-project-steps-services/addservice.service';
import { ViewProjectStepsComponent } from '../view-project-steps/view-project-steps.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-add-project-steps',
  templateUrl: './add-project-steps.component.html',
  styleUrls: ['./add-project-steps.component.css']
})
export class AddProjectStepsComponent implements OnInit {

  stepCreationForm: FormGroup
  step: singleStep = new singleStep();
  success: boolean = false;
  loadObj: ViewProjectStepsComponent;

  constructor(private stepService: ProjectstepsService,private formBuilder: FormBuilder) { 
    this.buildStepCreationForm();
  }
   

  ngOnInit(): void {
  }
createObj(){
  this.step.project_step = this.stepCreationForm.value.project_step;
  this.step.source= this.stepCreationForm.value.source;
  this.step.target = this.stepCreationForm.value.target;
}

  buildStepCreationForm(){
    this.stepCreationForm = this.formBuilder.group({
      'project_step': [''],
      'source': [''],
      'target': [''],
    });
  }

  onSubmit(){
    this.saveStep();
  }

  saveStep(){
    this.createObj();
    console.log(this.step);
    this.stepService.stepCreate(this.step)
        .subscribe(  
          data => {
            this.success = true;
            console.log("New step created!!");
          },
          error => console.log("sorry can't save"+error)
        )
  }

}
