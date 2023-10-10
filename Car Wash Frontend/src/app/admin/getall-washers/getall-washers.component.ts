import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-getall-washers',
  templateUrl: './getall-washers.component.html',
  styleUrls: ['./getall-washers.component.css'],
})
export class GetallWashersComponent implements OnInit {
  userList: Array<User> = [];
  constructor(private mgmt: ManagementService, private router: Router) {}

  ngOnInit(): void {
    this.getallusers();
  }

  //To get all the users from DB
  getallusers() {
    this.mgmt.getWashers().subscribe(
      (data) => {
        this.userList = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  //To delete the user from DB
  deleteUser(user: User) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#256c80',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Affirmative!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.mgmt.deleteUser(user).subscribe(
          (data) => {
            console.log(data);
            this.getallusers();
            if (data != null) {
              Swal.fire('User has been deleted', 'success');
              this.getallusers();
            }
          },
          (err) => {
            Swal.fire('Unexpected error occurred');
            console.log(err);
            return;
          }
        );
      }
    });
  }
}
