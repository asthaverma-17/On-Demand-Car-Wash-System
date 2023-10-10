import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/entityServices/admin-service/admin.service';
import { WashPacks } from 'src/app/models/WashPacks';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-washpack',
  templateUrl: './update-washpack.component.html',
  styleUrls: ['./update-washpack.component.css'],
})
export class UpdateWashpackComponent implements OnInit {
  wp: WashPacks = new WashPacks();
  edit = faMoneyCheck;
  id:string;

  constructor(
    private as: AdminService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.as.getOneWP(this.id).subscribe((data) => {
        this.wp = data;
      },
      (error) => console.log());
  };

  updateWPNow() {
    this.as.updateWP(this.id, this.wp).subscribe((data) => {
      console.log(data);
      Swal.fire({
        title: 'Washpack updated',
        icon: 'success',
      });
      this.goToAllWP();
    });
  }

  goToAllWP(){
    this.router.navigate(['/admin/wp'])
  }
}
