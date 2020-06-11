import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeActivitiesEntryComponent } from './employee-activities-entry.component';

describe('EmployeeActivitiesEntryComponent', () => {
  let component: EmployeeActivitiesEntryComponent;
  let fixture: ComponentFixture<EmployeeActivitiesEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeActivitiesEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeActivitiesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
