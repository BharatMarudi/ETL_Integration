import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectStepsComponent } from './components/add-project-steps/add-project-steps.component';
import { ViewProjectStepsComponent } from './components/view-project-steps/view-project-steps.component';
import { EditProjectStepsComponent } from './components/edit-project-steps/edit-project-steps.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'views', pathMatch: 'full' },
  { path: 'views', component: ViewProjectStepsComponent },
  { path: 'views/add', component: AddProjectStepsComponent },
  { path: 'views/edit/:id', component: EditProjectStepsComponent },
  { path: 'home', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
