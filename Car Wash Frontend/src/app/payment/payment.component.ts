import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomerService } from '../customer/customer.service';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentHandler: any = null;
  WPList: any;
  
  productAmount=500;
  totalAmount=1000;

  
  constructor(private router:Router, private route:ActivatedRoute, private service:CustomerService) {}
  ngOnInit() {
    
    
  }
  transactionDisplay(){
    
    this.service.createTransaction(this.productAmount).subscribe(
      (response) => {
        console.log(response);
        // console.log(this.productAmount);
        // console.log(this.totalAmount);
        
        if(this.totalAmount >= this.productAmount){
          this.openTransactionModel(response);
        }
        else{
          alert("Not sufficient balance");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openTransactionModel(response: any){
    var options = {
      order_id: response.order_id,
      key: response.key,
      amount: response.amount,
      currency: response.currency,
      name: 'Astha',
      description: 'Payment',
      image: '',
      handler: (response: any) => {
        this.processResponse(response);
      },
      prefill: {
        name: 'Astha Verma',
        email: 'av17@gmail.com',
        contact: '61726781'
      },
      notes:{
        address: 'GHHASKN'
      },
      theme: {
        color: '#F37254'
      }
    };

    var razorPayObject = new Razorpay(options);
    razorPayObject.open();
  }

  processResponse(resp: any){
    console.log(resp);
    
  }
}
