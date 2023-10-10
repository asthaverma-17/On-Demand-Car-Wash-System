import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';
import { RequestBaseService } from './request-base.service';
import { AuthenticationService } from './authentication.service';

const API_URL2 = environment.BASE_URL_ORDER;

@Injectable({
  providedIn: 'root',
})
export class OrderService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  getallOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findall', {
      headers: this.getHeaders,
    });
  }
  getCompletedOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findCompleted', {
      headers: this.getHeaders,
    });
  }
  getPendingOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findPending', {
      headers: this.getHeaders,
    });
  }
  getUnassignedOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findUnassigned', {
      headers: this.getHeaders,
    });
  }
  getCancelledOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findCancelled', {
      headers: this.getHeaders,
    });
  }
  addOrder(order: Order): Observable<Object> {
    return this.http.post(API_URL2 + '/add', order, {
      headers: this.getHeaders,
    });
  }
  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete(API_URL2 + '/delete/' + orderId, {
      headers: this.getHeaders,
    });
  }
  getOneOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(API_URL2 + '/findone/' + orderId, {
      headers: this.getHeaders,
    });
  }
  updatecompleteOrder(orderId: string): Observable<Object> {
    return this.http.put(API_URL2 + '/updateStatus/' + orderId, {
      headers: this.getHeaders,
    });
  }
  updateOrder(orderId: string, order: Order): Observable<Object> {
    return this.http.put(API_URL2 + '/update/' + orderId, order, {
      headers: this.getHeaders,
    });
  }
  getByemail(email: string): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findMyOrders/' + email, {
      headers: this.getHeaders,
    });
  }
  getWasherOrder(washername: string): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 +'/washerSpecficOrder/'+washername,{
      headers: this.getHeaders,
    });
  }
}