import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddProject } from '../../models/homepage-models/projects';

 
@Injectable({
  providedIn: 'root'
})
export class AddprojectService {

  private endpoint = 'http://127.0.0.1:8000/home/'
  constructor(private http: HttpClient) { }
  
  //GET ALL STEPS
  getAllProjects(): Observable<any>{
      return this.http.get(this.endpoint) 
  }
    //DELETE - STEP 
    deleteProject(id: number): Observable<any>{
        return this.http.delete(this.endpoint+id);
    }
  
    //DELETE - ALL
    deleteAllProjects(): Observable<any>{
        return this.http.delete(this.endpoint);
    }
    //POST - ADD STEP 
    projectCreate(project: AddProject): Observable<object>{
        return this.http.post(this.endpoint,project) 
  }

  }
  

