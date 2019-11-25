import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeActivityComponent } from './add-employee-activity.component';

describe('AddEmployeeActivityFormComponent', () => {
    let component: AddEmployeeActivityComponent;
    let fixture: ComponentFixture<AddEmployeeActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AddEmployeeActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(AddEmployeeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
