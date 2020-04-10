import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProjectStepsComponent } from './components/view-project-steps/view-project-steps.component';
import { AddProjectStepsComponent } from './components/add-project-steps/add-project-steps.component';
import { EditProjectStepsComponent } from './components/edit-project-steps/edit-project-steps.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProjectStepsComponent,
    AddProjectStepsComponent,
    EditProjectStepsComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
