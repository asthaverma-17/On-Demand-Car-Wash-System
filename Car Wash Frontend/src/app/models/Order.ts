import { Car } from "./Car";

export class Order {
  orderId: string;
  useremailid: string="";
  washerName: string="";
  washpack: string="";
  phoneNo: number;
  areapincode: string="";
  status: string="";
  cars: Car = new Car();
  
  //Empty Constructor
  Order() {

  }
}