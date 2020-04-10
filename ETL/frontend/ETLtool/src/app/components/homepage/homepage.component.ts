import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProject } from '../../models/homepage-models/projects';
import { AddprojectService } from '../../services/homepage-services/homepageservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']  
})
export class HomepageComponent implements OnInit {

  projects: Observable<AddProject[]>;
  success: Boolean = false;
  constructor(private stepsService: AddprojectService) { }

  ngOnInit(): void {
    this.loadProjectsData(); 
  }

  loadProjectsData(){
    this.projects = this.stepsService.getAllProjects();
  }
  deleteProject(id){
    this.stepsService.deleteProject(id)
        .subscribe(
          data => {
            this.success = true; 
            this.loadProjectsData();
          },
          error => console.log("failed to delete"+error)
        );
    console.log(this.success);
    console.log(this.projects);
  }

  deleteAllProjects(){
    this.stepsService.deleteAllProjects()
        .subscribe(
          data => {
            this.success = true;
            this.loadProjectsData();
          },
          error => console.log("failed to delete"+error)
        );
  }


}
