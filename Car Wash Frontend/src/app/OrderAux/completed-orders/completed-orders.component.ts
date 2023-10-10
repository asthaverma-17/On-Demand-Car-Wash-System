import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css'],
})
export class CompletedOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  constructor(
    private os: OrderService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.completedOrders();
  }
  private completedOrders() {
    this.os.getCompletedOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }
  back() {
    this.location.back();
  }
}
