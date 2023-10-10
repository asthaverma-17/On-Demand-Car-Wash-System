import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_URL3 = `${environment.BASE_URL_WASHER}`; 
@Injectable({
  providedIn: 'root'
})
export class WashpackService {
  constructor() { }
  
}
