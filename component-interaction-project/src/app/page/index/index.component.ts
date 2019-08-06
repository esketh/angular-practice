import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Employee } from 'src/app/model/employee';
import { Bill } from 'src/app/model/bill';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title: string = 'Dashboard'

  employeeList: Employee[];
  billsList: Bill[];
  // subscription: Subscription;

  modalCounter: number = 0;

  constructor(
    private mock: MockData
  ) {
    this.employeeList = this.mock.employee;
    this.billsList = this.mock.bills
   }

  ngOnInit() {
    // this.subscription = this.mock.employee$.subscribe(
    // employees = > this.employeeList = employees,
    // err => console.error(err),
    // () => console.log('complete')
    // );
  }

  ngOnDestroy( ){
    // this.subscription.unsubscribe();
  }

  showModal(): void {
    this.modalCounter++;
  }

}
