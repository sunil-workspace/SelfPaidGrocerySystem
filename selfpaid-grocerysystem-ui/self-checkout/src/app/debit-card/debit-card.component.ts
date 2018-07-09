import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from '../services/payment-details.service';
import { Payment } from './../payment';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent implements OnInit {

  debitCardName : string;
  debitCardNumber : number;
  debitCardExpDate : string;
  debitCardSecurityCode : number;

  constructor(private paymentDetailsService: PaymentDetailsService, private payment: Payment) { }

  ngOnInit() {
  }

  passDebitCardDetails() {
    console.log("Sending Debit Card details: CardName: " + this.debitCardName + " CardNumber: " + this.debitCardNumber
      + " CardExpDate: " + this.debitCardExpDate + " SecurityCode: " + this.debitCardSecurityCode);

    this.payment.nameOnCard = this.debitCardName;
    this.payment.cardNumber = this.debitCardNumber;
    this.payment.cardExpiryDate = this.debitCardExpDate;
    this.payment.securityCode = this.debitCardSecurityCode;
    this.payment.paymentMode = "Debit Card";

    this.paymentDetailsService.postDebitCardDetails(this.payment).subscribe((response) => {
      console.log("Response came to paymentDetailsService method. Is Card Details Inserted:: ", response.isCardDetailsInserted);
      if (response.isCardDetailsInserted == true) {
        console.log("Debit Card Details Inserted");
      } else if (response.isValidMember == false) {
        console.log("Debit Card Details Not Inserted");
      }
    });
  }

}
