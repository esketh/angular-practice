import { Component, OnInit, Input } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Employee } from 'src/app/model/employee';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title: string = 'Dashboard';

  data: MockData = new MockData();
  employeeData: Employee[] = [];
  billData: Bill[] = [];

  modalCounter: number = 0;

  constructor() {
    this.employeeData = this.data.employee;
    this.billData = this.data.bills;

  };

  ngOnInit() {
  };

  showModal(): void {
    this.modalCounter++;
  }

}
