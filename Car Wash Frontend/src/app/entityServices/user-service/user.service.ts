import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RequestBaseService } from 'src/app/services/request-base.service';
import { Order } from 'src/app/models/Order';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WashPacks } from 'src/app/models/WashPacks';

const API_URL_USER = environment.BASE_URL_USER

@Injectable({
  providedIn: 'root',
})
export class UserService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  addOrder(order: Order): Observable<Object> {
    return this.http.post(API_URL_USER + '/addOrder', order, {
      headers: this.getHeaders,
    });
  }
  seeAllWp(): Observable<WashPacks[]>{
    return this.http.get<WashPacks[]>(API_URL_USER + '/seeWP', {
      headers: this.getHeaders,
    });
  }

}
