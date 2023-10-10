import { Component, OnInit } from '@angular/core';
import { WashPacks } from 'src/app/models/WashPacks';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/entityServices/admin-service/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-washpack',
  templateUrl: './add-washpack.component.html',
  styleUrls: ['./add-washpack.component.css'],
})
export class AddWashpackComponent implements OnInit {
  wp: WashPacks = new WashPacks();
  box = faBoxOpen;
  constructor(private as: AdminService) {}

  ngOnInit(): void {}

  addWP(wp: WashPacks) {
    this.as.addWashPack(this.wp).subscribe((data) => {
      console.log(data);
      Swal.fire({
        title: 'Washpack Added',
        icon: 'success',
      });
    });
  }
}
