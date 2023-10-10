import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  currentUser: User = new User();
  email = '';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private os: OrderService
  ) {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
      this.email = this.currentUser?.email;
    });
  }

  ngOnInit(): void {
    this.getmyOrder(this.email);
  }

  getmyOrder(email: string) {
    this.os.getByemail(this.email).subscribe((data)=>{
      this.OrderList=data
    });
  }
}
