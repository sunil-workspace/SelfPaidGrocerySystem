import { Component, OnInit } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@Component({
  selector: 'app-finish-pay',
  templateUrl: './finish-pay.component.html',
  styleUrls: ['./finish-pay.component.css']
})
export class FinishPayComponent implements OnInit {

  selectPaymentType : boolean = true;
  cash : boolean = false; 
  creditCard : boolean = false; 
  debitCard : boolean = false; 
  giftCard : boolean = false; 

  constructor() { }
  
  ngOnInit() {
  }

  cashSelected():void{
    console.log("");
    this.selectPaymentType = false;
    this.cash = true;
  }

  creditCardSelected():void{
    console.log("");
    this.selectPaymentType = false;
    this.creditCard = true;
  }

  debitCardSelected():void{
    console.log("");
    this.selectPaymentType = false;
    this.debitCard = true;
  }

  giftCardSelected():void{
    console.log("");
    this.selectPaymentType = false;
    this.giftCard = true;
  }


}
