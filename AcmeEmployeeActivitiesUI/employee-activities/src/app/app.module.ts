import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeActivitiesEntryComponent } from '../components/employee-activities-entry/employee-activities-entry.component';
import { FormsModule } from '@angular/forms';
import { EmployeeActivitiesDetailsComponent } from '../components/employee-activities-details/employee-activities-details.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeActivitiesEntryComponent,
    EmployeeActivitiesDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
