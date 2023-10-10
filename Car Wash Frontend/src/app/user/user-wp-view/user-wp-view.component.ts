import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/entityServices/user-service/user.service';
import { WashPacks } from 'src/app/models/WashPacks';


@Component({
  selector: 'app-user-wp-view',
  templateUrl: './user-wp-view.component.html',
  styleUrls: ['./user-wp-view.component.css'],
})
export class UserWpViewComponent implements OnInit {
  WPList: Array<WashPacks> = [];
  
  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.seeWp();
  }
  //To get all washpack from user servie through restAPI endpoint
  seeWp(){
    this.us.seeAllWp().subscribe((data)=>{
      this.WPList=data;
      console.log(data);
    })
  }
}
