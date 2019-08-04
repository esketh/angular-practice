import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { MockData } from 'src/app/model/mock-data';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() data: MockData;

  title: string = 'Employees';

    md: MockData = new MockData();
    employees: Employee[] = this.md.employee;

  constructor() { }

  ngOnInit() {
  }

}
