import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  list: Order[] = [];
  list$: Observable<any> = this.orderService.getAll() 
  // a htmlben async pipe-pal kell csinálni

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    // this.orderService.getAll().subscribe(
    //   orders => this.list = orders,
    //   err => console.error(err)
    // );
  }

}
