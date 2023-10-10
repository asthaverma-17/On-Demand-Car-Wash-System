import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/entityServices/admin-service/admin.service';
import { WashPacks } from 'src/app/models/WashPacks';
import { Router } from '@angular/router';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all-wash-pack',
  templateUrl: './all-wash-pack.component.html',
  styleUrls: ['./all-wash-pack.component.css'],
})
export class AllWashPackComponent implements OnInit {
  WPList: Array<WashPacks> = [];
  trash = faTrash;
  edit = faEdit;
  constructor(private as: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getWP();
  }
  //Loaded on init
  getWP() {
    this.as.getAllWP().subscribe((data) => {
      this.WPList = data;
    });
  }

  delWP(id: string){
    this.as.delWashPack(id).subscribe((data)=>{
      console.log(data);
      this.getWP();
       Swal.fire({
         title: 'Washpack Deleted Succesfully',
         icon: 'success',
       });
    })
  }

  //To redirect to update component
  updateWP(id:string){
    this.router.navigateByUrl(`admin/updateWP/${id}`);
  }
}
