import { Payment } from './../payment';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentDetailsService {
  paymentDetailsArr : any[] = [];
  creditCardDetails : string;

  constructor(public http: Http) { }

  postCreditCardDetails(payment: Payment) {
    console.log("Came to PaymentDetailsService:postPaymentDetails method, The Payment details are:: ", payment);

    this.paymentDetailsArr[0]=payment.nameOnCard;
    this.paymentDetailsArr[1]=payment.cardNumber
    this.paymentDetailsArr[2]=payment.cardExpiryDate;
    this.paymentDetailsArr[3]=payment.securityCode;

    const url = 'http://localhost:8080/selfpaidgrocerysystem/postPaymentDetails/';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(url, payment, options).map(res => res.json());

    //console.log("Before posting paymen details: ", this.paymentDetailsArr);
    //return this.http.post('http://localhost:8080/selfpaidgrocerysystem/postPaymentDetails/', this.paymentDetailsArr).map(res => res.json());
    //return this.http.post('http://localhost:8080/selfpaidgrocerysystem/postPaymentDetails/', payment, "").map(res => res.json());
  }

  /*postCreditCardDetails(creditCardName, creditCardNumber, creditCardExpDate, creditCardSecurityCode) {
    console.log("Came to PaymentDetailsService:postPaymentDetails method.");

    this.creditCardDetails = creditCardName+"-"+creditCardNumber+"-"+creditCardExpDate+"-"+creditCardSecurityCode;
    console.log("this.creditCardDetails: ", this.creditCardDetails);
   
    return this.http.post('http://localhost:8080/selfpaidgrocerysystem/postPaymentDetails/',this.creditCardDetails, "" ).map(res => res.json());

    //return this.http.get('http://localhost:8080/selfpaidgrocerysystem/validateMemberId/'+memberId).map(res => res.json());
  }*/

  /*postCreditCardDetailsUsingGet(creditCardName, creditCardNumber, creditCardExpDate, creditCardSecurityCode) {
    console.log("Came to PaymentDetailsService:postPaymentDetails method.");

    this.creditCardDetails = creditCardName+"-"+creditCardNumber+"-"+creditCardExpDate+"-"+creditCardSecurityCode;
    console.log("this.creditCardDetails: ", this.creditCardDetails);
   
    //return this.http.get('http://localhost:8080/selfpaidgrocerysystem/getPaymentDetails/'+this.creditCardDetails).map(res => res.json());

    return this.http.get('http://localhost:8080/selfpaidgrocerysystem/validateMemberId/'+this.creditCardDetails).map(res => res.json());
  }*/

  

}
