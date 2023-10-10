import { Component, OnInit } from '@angular/core';
import { WasherService } from 'src/app/entityServices/washer-service/washer.service';
import { Order } from 'src/app/models/Order';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-unassigned-washer-view',
  templateUrl: './unassigned-washer-view.component.html',
  styleUrls: ['./unassigned-washer-view.component.css'],
})
export class UnassignedWasherViewComponent implements OnInit {
  OrderList: Array<Order> = [];
  washerName: string;
  constructor(private ws: WasherService, private as: AuthenticationService) {}

  ngOnInit(): void {
    this.getUnassignedOrders();
  }

  getUnassignedOrders() {
    this.ws.getUnassignedOrders().subscribe((data) => {
      this.OrderList = data;
      console.log(data);
    });
  }


  //To add a method for washer to input his name in an order
  //assigmMyself(){
  //  this.ws.updatecompleteOrder
  //}
}
