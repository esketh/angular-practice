import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  modalCounter: number = 0;
  mockData: MockData = new MockData();
  bills: Bill[] = [];
  billDataForModal: Bill;

  constructor() {
    this.bills = this.mockData.bills;
  }

  ngOnInit() {
  }

  afterChange() {
    console.log(this.bills);
  }

  showModal(billDataForModal: Bill): void {
    this.modalCounter++;
    this.billDataForModal = billDataForModal;
  } 



}
