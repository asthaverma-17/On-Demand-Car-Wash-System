import { Component, OnInit } from '@angular/core';
import { WasherService } from 'src/app/entityServices/washer-service/washer.service';
import { WashPacks } from 'src/app/models/WashPacks';

@Component({
  selector: 'app-washer-wp-view',
  templateUrl: './washer-wp-view.component.html',
  styleUrls: ['./washer-wp-view.component.css'],
})
export class WasherWpViewComponent implements OnInit {
  WPList: Array<WashPacks> = [];
  constructor(private ws: WasherService) {}

  ngOnInit(): void {
    this.seeWP();
  }

  seeWP(){
    this.ws.getWPs().subscribe((data)=>{
      this.WPList=data;
      console.log(data);
    });
  }
}
