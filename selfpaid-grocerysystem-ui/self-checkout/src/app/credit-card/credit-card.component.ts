import { ItemDetailsService } from './../services/item-details.service';
import { Payment } from './../payment';
import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from '../services/payment-details.service';


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

  creditCardName : string;
  creditCardNumber : number;
  creditCardExpDate : Date;
  creditCardSecurityCode : number;

  constructor(private paymentDetailsService : PaymentDetailsService, private payment: Payment, private itemDetailsService : ItemDetailsService) { }
  
  ngOnInit() {
  }

  passCreditCardDetails(){
    console.log("Sending Credit Card details: CardName: " + this.creditCardName + " CardNumber: " + this.creditCardNumber 
    + " CardExpDate: " + this.creditCardExpDate + " SecurityCode: " + this.creditCardSecurityCode);

    this.payment.nameOnCard = this.creditCardName;
    this.payment.cardNumber = this.creditCardNumber;
    this.payment.cardExpiryDate = this.creditCardExpDate;
    this.payment.securityCode = this.creditCardSecurityCode;

    /*//this.paymentDetailsService.postCreditCardDetails(this.creditCardName, this.creditCardNumber, this.creditCardExpDate, this.creditCardSecurityCode);
    this.paymentDetailsService.postCreditCardDetailsUsingGet(this.creditCardName, this.creditCardNumber, this.creditCardExpDate, this.creditCardSecurityCode);
    //this.itemDetailsService.postCreditCardDetails(this.payment);*/


    this.paymentDetailsService.postCreditCardDetails(this.payment).subscribe((response) => {
      console.log("Response came to paymentDetailsService method. Is Card Details Inserted:: ", response.isCardDetailsInserted); 
      if(response.isCardDetailsInserted=="true"){
        console.log("Card Details Inserted");
      } else if(response.isValidMember == "false"){
        console.log("Card Details Not Inserted");
      }
    });

    /*this.paymentDetailsService.postCreditCardDetailsUsingGet(this.creditCardName, this.creditCardNumber, this.creditCardExpDate, this.creditCardSecurityCode).subscribe((response) => {
      console.log("Response came to paymentDetailsService method. Is Card Details Inserted:: ", response.isCardDetailsInserted); 
      if(response.isCardDetailsInserted=="true"){
        console.log("Card Details Inserted");
      } else if(response.isValidMember == "false"){
        console.log("Card Details Not Inserted");
      }
    });*/


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
