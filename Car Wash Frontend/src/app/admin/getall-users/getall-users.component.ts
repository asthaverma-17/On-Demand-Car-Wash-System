import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-getall-users',
  templateUrl: './getall-users.component.html',
  styleUrls: ['./getall-users.component.css'],
})
export class GetallUsersComponent implements OnInit {
  userList: Array<User> = [];
  constructor(private mgmt: ManagementService, private router: Router) {}

  ngOnInit(): void {
    this.getallusers();
  }

  //To get all the users from DB
  getallusers() {
    this.mgmt.getAllUsers().subscribe(
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
