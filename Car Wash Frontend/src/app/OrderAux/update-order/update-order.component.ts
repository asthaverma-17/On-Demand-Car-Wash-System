import { Component, OnInit } from '@angular/core';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
})
export class UpdateOrderComponent implements OnInit {
  order: Order = new Order();
  edit = faMoneyCheck;
  id: string;

  constructor(private os: OrderService, private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id']
    this.os.getOneOrder(this.id).subscribe(data =>{
      this.order=data;
    },
    error =>console.log());
  };

  updateOrderNow(){
    this.os.updateOrder(this.id,this.order).subscribe((data)=>{
      console.log(data);
      Swal.fire({
        title:"Order updated",
        icon:"success"
      });
      this.goToAllOrders();
    });
  }

  goToAllOrders(){
    this.router.navigate(['/admin/allOrders'])
  }
}
