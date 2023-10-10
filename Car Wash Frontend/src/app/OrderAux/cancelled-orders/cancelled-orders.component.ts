import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cancelled-orders',
  templateUrl: './cancelled-orders.component.html',
  styleUrls: ['./cancelled-orders.component.css'],
})
export class CancelledOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  constructor(private os: OrderService, private location: Location) {}

  ngOnInit(): void {
    this.cancelledOrders();
  }
  private cancelledOrders() {
    this.os.getCancelledOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }
  back(){
    this.location.back();
  }
}
