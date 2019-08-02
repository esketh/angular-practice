import { Component, OnInit, Input } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
@Input() employee: Employee;
@Input() data: MockData;

  title: string = 'Employees'

  data: MockData = new MockData();
  
  constructor() { }

  ngOnInit() {
  }

}
