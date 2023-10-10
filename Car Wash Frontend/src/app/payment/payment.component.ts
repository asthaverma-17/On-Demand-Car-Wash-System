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
  productAmount=200;
  totalAmount=1000;
  
  constructor(private router:Router, private route:ActivatedRoute, private service:CustomerService) {}
  ngOnInit() {
    // this.route.paramMap.subscribe((param)=> {let name = (param.get('name'))
    // console.log(name);
    // this.getWPByName(name);
  // });
    // this.invokeStripe();
    
  }
  // getWPByName(name:any){
  //   this.service.getWashPackName(name).subscribe((data)=>{
  //     this.WPList=data;
  //   })

  // }

  // makePayment(amount: any) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_51Mc0srSFdGebVWh25jqdThtTJwRSeF7QnqdQBN05XzHg0sM205Sha3ISF2BcAAKuxxhmawmxGm19lKzlSpGTqyOt00si6EBlSc',
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken);
  //       // alert('Token Generated');
  //       Swal.fire({
  //         title:'payment syccessful and order Placed',
  //         icon:'success'
  //       });
          
        
  //     },
      
      
  //   });
  //   paymentHandler.open({
  //     name: 'CarWash',
  //     description: this.WPList.name,
  //     // amount: amount * 100,
  //   });
  //   // this.router.navigate(['user'])
  //   this.router.navigate(['user/customerhomepage'])
  // }
  // invokeStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://checkout.stripe.com/checkout.js';
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51Mc0srSFdGebVWh25jqdThtTJwRSeF7QnqdQBN05XzHg0sM205Sha3ISF2BcAAKuxxhmawmxGm19lKzlSpGTqyOt00si6EBlSc',
  //         locale: 'auto',
  //         token: function (stripeToken: any) {
  //           console.log(stripeToken);
  //           alert('Payment has been successfull!');
  //         },
  //       });
  //     };
  //     window.document.body.appendChild(script);
  //   }
  // }
  transactionDisplay(){
    
    this.service.createTransaction(this.productAmount).subscribe(
      (response) => {
        console.log(response);
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
      image: 'D:\CaseStudyAngular\deals-coupons\src\assets\s3.jpg',
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
