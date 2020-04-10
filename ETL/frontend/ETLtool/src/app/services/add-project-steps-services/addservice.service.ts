import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { singleStep } from '../../models/add-project-steps-models/step'
 
@Injectable({
  providedIn: 'root'
})
export class ProjectstepsService {

  private endpoint = 'http://127.0.0.1:8000/views/'
  constructor(private http: HttpClient) { }

  //GET ALL STEPS
  getAllSteps(): Observable<any>{
    return this.http.get(this.endpoint) 
  }

  //POST - ADD STEP 
  stepCreate(step: singleStep): Observable<object>{
    return this.http.post(this.endpoint,step)
  }

  //DELETE - STEP 
  deleteStep(id: number): Observable<any>{
    return this.http.delete(this.endpoint+id);
  }

  //DELETE - ALL
  deleteAllSteps(): Observable<any>{
    return this.http.delete(this.endpoint);
  }
}
