import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WasherService {

  constructor(private http:HttpClient) { }
  getAllWashers()
  {
    return this.http.get('http://localhost:8081/admins/AllWashers')
  }
  deleteWasher(email:any):Observable<any>
  {
    return this.http.get<any>(`http://localhost:8084/washers/admin/delete/${email}`)
  }
  getWashPacks()
  {
    return this.http.get("http://localhost:8084/washers/seeWP")
  }
  getWasherByUsername(username:any)
  {
    return this.http.get(`http://localhost:8084/washers/admin/Washer/${username}`)
  }
  updateWasherByEmail(payload:any)
  {
    return this.http.put(`http://localhost:8084/washers/updateDetails/${payload.email}`,payload)
  }
  
}
