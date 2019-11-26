import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeActivityService } from '../services/employee-activity-service';


@Component({
  selector: 'app-employee-activity',
  templateUrl: './employee-activity.component.html'  
})
export class EmployeeActivityComponent  {
    //init props
    public employeeActivitylist: EmployeeActivityList[];
    

    constructor(private _employeeService: EmployeeActivityService) {
        this.getEmployeeActivities();
    }

    getEmployeeActivities() {
        this._employeeService.getEmployeeActivities().subscribe(data => this.employeeActivitylist = data)        
    }  
  
}

interface EmployeeActivityList {
    ActivityId: number;
    FirstName: string;
    LastName: string;
    EmailAddress: string;
    Comments: string;    
} 
