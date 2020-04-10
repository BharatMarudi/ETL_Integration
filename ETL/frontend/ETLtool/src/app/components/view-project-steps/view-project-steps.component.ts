import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { viewStep } from '../../models/view-project-steps-models/steps';
import { ProjectstepsService } from '../../services/view-project-steps-services/viewservice.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-project-steps',
  templateUrl: './view-project-steps.component.html',
  styleUrls: ['./view-project-steps.component.css']
})
export class ViewProjectStepsComponent implements OnInit {

  steps: Observable<viewStep[]>;
  success: Boolean = false;

  constructor(private stepsService: ProjectstepsService, private router: Router) { }

  ngOnInit(): void {
    this.loadStepsData(); 
  }

  loadStepsData(){
    this.steps = this.stepsService.getAllSteps();
  }

  onEdit(step){
    this.router.navigate(['/views/edit',step.id]);
  }

  deleteStep(id){
    console.log(id)
    this.stepsService.deleteStep(id)
        .subscribe(
          data => {
            this.success = true; 
            this.loadStepsData();
          },
          error => console.log("failed to delete"+error)
        );
    console.log(this.success);
    console.log(this.steps);
  }

  deleteAllSteps(){
    this.stepsService.deleteAllSteps()
        .subscribe(
          data => {
            this.success = true;
            this.loadStepsData();
          },
          error => console.log("failed to delete"+error)
        );
  }
}
