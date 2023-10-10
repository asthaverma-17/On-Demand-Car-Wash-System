import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: any;

  constructor(private http:HttpClient, private router:Router) { }
  register(payload: any) {
    return this.http.post("http://localhost:8082/customer/register", payload);
  }
  login(payload:any){
    return this.http.post("http://localhost:8082/customer/login",payload);
  }
  registerAdmin(payload:any){
    return this.http.post("http://localhost:8081/admins/register",payload);
  }
  loginAdmin(payload:any){
    return this.http.post("http://localhost:8081/admins/login",payload);
  }
  loginWasher(payload:any){
    return this.http.post("http://localhost:8084/washers/login",payload);
  }
  registerWasher(payload:any){
    return this.http.post("http://localhost:8084/washers/register",payload)
  }
loggedIn(){
  return !!localStorage.getItem('token')
}

getToken(){
  return localStorage.getItem('token')
}
getUsername(){
  return localStorage.getItem('username')
}
logoutUser() {
   Swal.fire({
   title:'Are you Sure want to Logout?',
   text: '',
   icon: 'warning',
   showCancelButton: true,
   confirmButtonText: 'Yes',
   cancelButtonText: 'Cancel'
   }).then((result)=>{ if(result.value){
     localStorage.removeItem('token');
     localStorage.removeItem('username');
     console.log("enters")
     this.router.navigate(['/landing-page']) 
    }})
}

}
