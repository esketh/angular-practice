import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Employee } from 'src/app/model/employee';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: string = 'Employees'

employeeList: Employee[];

  constructor(
    private mock: MockData
  ) {
    this.employeeList = this.mock.employee;
     }

  ngOnInit() {
  }

}
