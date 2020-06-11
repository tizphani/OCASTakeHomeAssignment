import { Component, OnInit } from '@angular/core';
import { EmployeeActivitiesService } from 'src/services/employee-activities.service';
import { EmployeeActivitiesModel } from 'src/models/employee-activities-model';
import { catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-activities-details',
  templateUrl: './employee-activities-details.component.html',
  styleUrls: ['./employee-activities-details.component.css']
})
export class EmployeeActivitiesDetailsComponent implements OnInit {
  activityDetails: EmployeeActivitiesModel[] | any;
  detailsMessage = '';
  constructor(private employeeActivitiesService: EmployeeActivitiesService, private router: Router) { }

  ngOnInit(): void {
    this.employeeActivitiesService.getEmployeeActivities()
    .subscribe(empActivityDetails => this.activityDetails = empActivityDetails,
      err => { this.detailsMessage = 'Error getting Activity details from database';
               console.log(err);
              } );
  }

  onBackButtonClick() {
    window.history.back();
  }

}
