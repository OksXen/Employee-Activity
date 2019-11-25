import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeActivityService } from '../services/employee-activity-service';


@Component({
    selector: 'app-add-employee-activity-form',
    templateUrl: './add-employee-activity.component.html'
})

export class AddEmployeeActivityComponent {
    constructor(private _employeeActivityService: EmployeeActivityService, private _router: Router) { }

    //init props
    errorMessage: any;
    submitted = false;
    eventNames: any = ['Developing in .Net Core ReactJs', 'Developing in .Net Core Angular', 'Developing in .Net Core ReactJs And Redux', 'Developing in .Net Core MVC']
    employeeActivityForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        emailAddress: new FormControl('', [Validators.email]),
        activityName: new FormControl('', Validators.required),
        comments: new FormControl('', Validators.required),
    });

    //save data
    onSubmit() {
        this.submitted = true;

        if (!this.employeeActivityForm.valid) {            
            return false;
        }
        else {            
            this._employeeActivityService.saveEmployeeActivity(this.employeeActivityForm.value).subscribe((data) => {
                this._router.navigate(['/employee-activity']);
            }, error => this.errorMessage = error)
        }
        
    }

    //helper
    get f() { return this.employeeActivityForm.controls; }
    
    changeEventName(e) {
        var v = e.target.value.split(':');
        if (v !== undefined && v.length == 2) {
            console.log(v[1].trim());
            this.f.activityName.setValue(v[1].trim(), {
                onlySelf: true
            });        
        }
        
    }
   

}
