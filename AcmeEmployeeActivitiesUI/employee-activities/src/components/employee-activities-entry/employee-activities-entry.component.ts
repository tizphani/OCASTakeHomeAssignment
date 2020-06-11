import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeActivitiesService } from 'src/services/employee-activities.service';
import { catchError} from 'rxjs/operators';
import { EmployeeActivitiesModel } from 'src/models/employee-activities-model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-activities-entry',
  templateUrl: './employee-activities-entry.component.html',
  styleUrls: ['./employee-activities-entry.component.css']
})
export class EmployeeActivitiesEntryComponent  implements OnInit{

  employeeActivities: EmployeeActivitiesModel | any;
  formMessage = '';
  @ViewChild('empActivityForm') myForm: NgForm;

  constructor(private employeeActivitiesService: EmployeeActivitiesService, private router: Router) {}

  ngOnInit() {
    this.employeeActivities = {};
  }

  onSubmit() {
    this.employeeActivitiesService.postEmployeeActivity(this.employeeActivities)
    .subscribe(resp => this.router.navigate(['/activitydetails']),
    err => { this.formMessage = 'Error submitting activity details';
             console.log(err);
            });
  }

  onResetClick() {
    this.myForm.reset();
    this.formMessage = '';
  }
}
