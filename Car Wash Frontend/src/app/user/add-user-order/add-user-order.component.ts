import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/entityServices/user-service/user.service';
import { Order } from 'src/app/models/Order';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user-order',
  templateUrl: './add-user-order.component.html',
  styleUrls: ['./add-user-order.component.css'],
})
export class AddUserOrderComponent implements OnInit {
  errorMessage: string;
  order: Order = new Order();
  constructor(private us: UserService) {}
  sb = faShoppingBasket;
  ngOnInit(): void {}

  addOrder(order: Order) {
    this.us.addOrder(this.order).subscribe((data) => {
      console.log(data);
      Swal.fire({
        title: 'Order Booked',
        icon: 'success',
      });
    });
  }
}
