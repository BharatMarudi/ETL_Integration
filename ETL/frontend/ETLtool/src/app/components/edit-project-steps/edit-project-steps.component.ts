import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { EditProject } from '../../models/edit-project-steps-models/editsteps';
import { EditProjectService } from '../../services/edit-project-steps-services/editstepservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit-project-steps',
  templateUrl: './edit-project-steps.component.html',
  styleUrls: ['./edit-project-steps.component.css']
})
export class EditProjectStepsComponent implements OnInit {
  editStep: EditProject = new EditProject();
  success: boolean = false;
  editForm: FormGroup;
  getStep: Observable<EditProject[]>
  singleStep: EditProject[];
  errorMessage: String;

  constructor(private editStepService: EditProjectService, 
    private fb:FormBuilder,
    private activeroute: ActivatedRoute,) {
    
   }

  ngOnInit(): void {
    this.buildEditStepForm();
    let id = parseInt(this.activeroute.snapshot.paramMap.get("id"));
    this.loadStep(id);
    this.loadEditStep();
    console.log(id);
  }

  loadEditStep(): void{
    this.editForm.setValue({
      'project_step': ['sample'],
      'source': ['sample_source'],
      'target': ['sample_target'],
    })
  }

  buildEditStepForm(){
    this.editForm = this.fb.group({
      'project_step': [''],
      'source': [''],
      'target': [''],
    });
  }

  loadStep(id){
    this.getStep = this.editStepService.getsingleStep(id);
    this.getStep.subscribe(
      singleStep => this.singleStep = singleStep,
      error =>  this.errorMessage = <any>error);
      console.log(this.singleStep);
  }

  onSubmit(id) {
    this.saveStep(id);
  }

  saveStep(id){
    this.editStepService.updateEditproject(id,this.editStep)
        .subscribe(  
          data => {
            this.success = true;
            console.log("New step created!!");
          },
          error => console.log("sorry can't save"+error)
        )
  }

}
