import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { Location } from '@angular/common';
@Component({
  selector: 'app-unassigned-orders',
  templateUrl: './unassigned-orders.component.html',
  styleUrls: ['./unassigned-orders.component.css'],
})
export class UnassignedOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  constructor(
    private os: OrderService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.unassignedOrders();
  }

  private unassignedOrders() {
    this.os.getUnassignedOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }
  //To go back one dir
  back() {
    this.location.back();
  }
}