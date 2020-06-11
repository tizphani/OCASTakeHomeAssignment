import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeActivitiesDetailsComponent } from './employee-activities-details.component';

describe('EmployeeActivitiesDetailsComponent', () => {
  let component: EmployeeActivitiesDetailsComponent;
  let fixture: ComponentFixture<EmployeeActivitiesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeActivitiesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeActivitiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
