import { Component } from '@angular/core';

@Component({
    selector: 'list-employee',
    templateUrl: './employee-list-component.component.html',
    styleUrls: ['./employee-list-component.component.css']
})
export class EmployeeListComponent {
    employees: any[] = [
        {
            code: 'emp101', name: 'chinna', gender: 'Male',
            annualSalary: 5500, dateOfBirth: '25/6/1988'
        },
        {
            code: 'emp102', name: 'mahi', gender: 'Male',
            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
        },
        {
            code: 'emp103', name: 'naresh', gender: 'Male',
            annualSalary: 5900, dateOfBirth: '12/8/1979'
        },
        {
            code: 'emp104', name: 'chinni', gender: 'Female',
            annualSalary: 6500.826, dateOfBirth: '14/10/1980'
        },
    ];
}