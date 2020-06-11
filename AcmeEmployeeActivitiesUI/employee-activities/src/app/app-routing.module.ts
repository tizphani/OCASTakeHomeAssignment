import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeActivitiesEntryComponent } from 'src/components/employee-activities-entry/employee-activities-entry.component';
import { EmployeeActivitiesDetailsComponent } from 'src/components/employee-activities-details/employee-activities-details.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: EmployeeActivitiesEntryComponent },
  { path: 'activitydetails', component: EmployeeActivitiesDetailsComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
