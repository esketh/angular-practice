import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/model/bill';
import { MockData } from 'src/app/model/mock-data';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})

export class BillComponent implements OnInit {
  title = "Bills";

  md: MockData = new MockData();
  bill: Bill[] = [];

  afterChange() {
    console.log(this.bill);
  }
  
  constructor() {
    this.bill = this.md.bills;
   }

  ngOnInit() {
  }

}
