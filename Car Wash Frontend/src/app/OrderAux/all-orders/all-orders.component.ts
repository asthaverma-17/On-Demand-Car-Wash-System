import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { Location } from '@angular/common';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {
  trash=faTrash;
  edit=faEdit;
  OrderList: Array<Order> = [];
  constructor(private os: OrderService, private router: Router, private location: Location) {}
  ngOnInit(): void {
    this.getAllOrders();
  }

  // A method defined here to call order Service
  private getAllOrders() {
    this.os.getallOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }

  //To delete an order with one button click
  deleteOrder(orderid: string) {
    Swal.fire({
      title: 'Do you really want to delete this order?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.os.deleteOrder(orderid).subscribe((data) => {
          console.log(data);
          this.getAllOrders();
        });
        Swal.fire('Order Deleted Succesfully');
      } else if (result.isDenied) {
        Swal.fire('Order Was not deleted');
      }
    });
  }


  //To update the details of the order redirects to the page
  updateOrder(orderid: string){
    this.router.navigateByUrl(`admin/updateOrder/${orderid}`)
  }

}


