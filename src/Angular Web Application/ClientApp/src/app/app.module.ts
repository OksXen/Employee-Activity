import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeActivityComponent } from './add-employee-activity/add-employee-activity.component';
import { EmployeeActivityService } from './services/employee-activity-service';
import {HttpModule} from '@angular/http';
import { EmployeeActivityComponent } from './employee-activity/employee-activity.component';

@NgModule({
    declarations:
        [
            AppComponent,
            NavMenuComponent,
            HomeComponent,
            AddEmployeeActivityComponent,
            EmployeeActivityComponent            
        ],
    imports:
        [            
            HttpModule,
            BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
            HttpClientModule,
            FormsModule,            
            ReactiveFormsModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent, pathMatch: 'full' },
                { path: 'add-employee-activity', component: AddEmployeeActivityComponent },
                { path: 'employee-activity', component: EmployeeActivityComponent }
            ])
  ],
  providers: [EmployeeActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
