import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

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
