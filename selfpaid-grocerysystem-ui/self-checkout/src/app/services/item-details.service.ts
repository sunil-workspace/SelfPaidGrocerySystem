import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Payment } from './../payment';

@Injectable()
export class ItemDetailsService {

  paymentJson : string;

  constructor(public http:Http) { }

  getItemDetails(selectedItem){
    console.log("Came to ItemDetailsService: getItemDetails method, The item selected is:: ", selectedItem);
    return this.http.get('http://localhost:8080/selfpaidgrocerysystem/getItemDetails/'+selectedItem).map(res => res.json());
    /*if(selectedItem == "apple"){
    return this.http.get('assets/jsons/itemDetails.json').map(res => res.json());
    } else if(selectedItem == "avocado"){
      return this.http.get('assets/jsons/itemDetails1.json').map(res => res.json());
    } else if(selectedItem == "apricot"){
      return this.http.get('assets/jsons/itemDetails2.json').map(res => res.json());
    }*/
  }

  postItemDetails(finalSelectedItemsArr){
    console.log("Came to ItemDetailsService:postItemDetails method, The Final Items List is:: ", finalSelectedItemsArr);
    return this.http.post('http://localhost:8080/selfpaidgrocerysystem/postItemDetails/', finalSelectedItemsArr, "").map(res => res.json());
  }

  /*postCreditCardDetails(payment: Payment) {
    console.log("Came to PaymentDetailsService:postPaymentDetails method, The Payment details are:: ", payment);

    const url = 'http://localhost:8080/selfpaidgrocerysystem/postPaymentDetails/';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.paymentJson = JSON.parse(JSON.stringify(payment));
    return this.http.post(url, this.paymentJson, options);
  }*/

}
