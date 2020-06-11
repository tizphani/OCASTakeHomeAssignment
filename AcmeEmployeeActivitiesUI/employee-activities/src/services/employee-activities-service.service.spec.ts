import { TestBed } from '@angular/core/testing';

import { EmployeeActivitiesService } from './employee-activities.service';

describe('EmployeeActivitiesServiceService', () => {
  let service: EmployeeActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
