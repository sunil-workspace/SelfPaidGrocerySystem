import { Payment } from './../payment';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentDetailsService {

  constructor(public http: Http) { }

  postCreditCardDetails(payment: Payment) {
    console.log("Came to PaymentDetailsService:postCreditCardDetails method, The Payment details are:: ", payment);
    const url = 'http://localhost:8080/selfpaidgrocerysystem/postPaymentDetails/';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, payment, options).map(res => res.json());
  }
  postDebitCardDetails(payment: Payment) {
    console.log("Came to PaymentDetailsService:postDebitCardDetails method, The Payment details are:: ", payment);
    const url = 'http://localhost:8080/selfpaidgrocerysystem/postPaymentDetails/';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, payment, options).map(res => res.json());
  }

  postGiftCardDetails(payment: Payment) {
    console.log("Came to PaymentDetailsService:postGiftCardDetails method, The Payment details are:: ", payment);
    const url = 'http://localhost:8080/selfpaidgrocerysystem/postPaymentDetails/';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, payment, options).map(res => res.json());
  }

  

}
