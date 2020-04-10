import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { EditProject } from '../../models/edit-project-steps-models/editsteps'
@Injectable({
  providedIn: 'root'
})
export class EditProjectService {

  private endpoint = 'http://127.0.0.1:8000/views/'

  constructor(private http: HttpClient) { }

  //GET Single STEP
  getsingleStep(id): Observable<EditProject[]>{
    return this.http.get(this.endpoint+id).pipe(map((data: EditProject[]) => data));
  }

  //PUT - Update
  updateEditproject(id: number, payload: any): Observable<object>{
      return this.http.put(this.endpoint + id, payload);
    }
}