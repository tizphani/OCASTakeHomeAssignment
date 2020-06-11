import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import {environment} from '../environments/environment';
import { EmployeeActivitiesModel } from 'src/models/employee-activities-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeActivitiesService {

  private apiPath = environment.apiEndpoint + 'EmployeeActivities';

  constructor( private httpClient: HttpClient) { }

  getEmployeeActivities() {
    return this.httpClient.get<EmployeeActivitiesModel[]>(this.apiPath, {responseType: 'json'});
  }

  postEmployeeActivity(employeeActivity: EmployeeActivitiesModel) {
    return this.httpClient.post<EmployeeActivitiesModel>(this.apiPath, employeeActivity);
  }
}
