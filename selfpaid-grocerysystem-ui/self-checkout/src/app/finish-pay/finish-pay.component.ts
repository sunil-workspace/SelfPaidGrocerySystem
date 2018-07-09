import { Component, OnInit } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@Component({
  selector: 'app-finish-pay',
  templateUrl: './finish-pay.component.html',
  styleUrls: ['./finish-pay.component.css']
})
export class FinishPayComponent implements OnInit {

  selectPaymentType: boolean = true;
  cash: boolean = false;
  creditCard: boolean = false;
  debitCard: boolean = false;
  giftCard: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  cashSelected(): void {
    console.log("Cash payment option selected");
    this.selectPaymentType = false;
    this.cash = true;
  }

  creditCardSelected(): void {
    console.log("Credit Card payment option selected");
    this.selectPaymentType = false;
    this.creditCard = true;
  }

  debitCardSelected(): void {
    console.log("Debit Card payment option selected");
    this.selectPaymentType = false;
    this.debitCard = true;
  }

  giftCardSelected(): void {
    console.log("Gift Card payment option selected");
    this.selectPaymentType = false;
    this.giftCard = true;
  }


}
