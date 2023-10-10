import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { User } from 'src/app/models/User';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-assign-washer',
  templateUrl: './assign-washer.component.html',
  styleUrls: ['./assign-washer.component.css']
})
export class AssignWasherComponent implements OnInit{
  userList: Array<User> = [];

  AssignWashers: any={
    orderId:'',
    washerName:''   
  };
  constructor(private mgmt: ManagementService,private service:OrderService,private route:ActivatedRoute, private router:Router, private loaction : Location){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=> {let orderId = (param.get('orderId'))
    console.log(orderId);
    this.getOrderById(orderId);
    console.log(this.getallusers());
    
  })
  }
  getOrderById(orderId:any){
    this.service.getOrderById(orderId).subscribe((data)=>{
      this.AssignWashers=data
    })
  }

  getallusers() {
    this.mgmt.getWashers().subscribe(
      (data) => {
        console.log("dta:",data)
        this.userList = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  Assign(){
    this.service.AssignWasher(this.AssignWashers).subscribe({next:(data)=>{
      window.alert("Assigned successfully");
      this.loaction.back();
    },
    error:(error)=>console.log(error)
  }
    )
  }
  

  
}



 
