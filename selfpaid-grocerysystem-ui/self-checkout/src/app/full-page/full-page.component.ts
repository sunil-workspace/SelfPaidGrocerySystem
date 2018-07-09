import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.css']
})
export class FullPageComponent implements OnInit {

  /* //Default values
   displayLeftRight : boolean = true;
   lookupFinishPayButtons : boolean = false;
   lookupFinishFlow : boolean = false;*/

  //For Testing
  displayLeftRight: boolean = true;
  lookupFinishPayButtons: boolean = false;
  lookupFinishFlow: boolean = false;
  finishAndPay : boolean = false;

  @Output() emitToTable = new EventEmitter<any>();

  itemDetails: any;
  itemDetailsArr: any = [];

  isItemFound: boolean = false;
  itemFoundIndex: number;

  constructor() { }

  ngOnInit() {
  }

  onClickingMemberButton() {
    this.displayLeftRight = false,
      this.lookupFinishPayButtons = true
  }

  onClickingLookupButton() {
    this.lookupFinishPayButtons = false,
      this.lookupFinishFlow = true
  }

  onClickingFinishPay() {
    this.lookupFinishPayButtons = false
    this.finishAndPay=true

  }
  onClickingItem(itemDetails) {
    //console.log("Event came from lookup item component: ", itemDetails);
    this.lookupFinishFlow = false;
    this.lookupFinishPayButtons = true;



    //Before adding, check if the same item exists, if exists, 
    //get the Quantity and increase the quantity by 1
    //Calculate the price, Price * Quantity
    if (this.itemDetailsArr.length == 0) {
      console.log("Inside if condition for firsttime");
      this.itemDetailsArr.push(itemDetails);
    } else {
      for (this.itemFoundIndex = 0; this.itemFoundIndex < this.itemDetailsArr.length; this.itemFoundIndex++) {
        if (this.itemDetailsArr[this.itemFoundIndex]["NAME"] === itemDetails["NAME"]) {
          this.isItemFound = true;
          break;
        }
      }
      this.callAMethod(itemDetails);
    }

  }

  callAMethod(itemDetails) {
    console.log("this.isItemFound: ", this.isItemFound, " Index: ", this.itemFoundIndex);
    if (this.isItemFound == true) {
      console.log("Found matching item");
      let quantity = this.itemDetailsArr[this.itemFoundIndex]["QUANTITY"];
      quantity = ++quantity;
      this.itemDetailsArr[this.itemFoundIndex]["QUANTITY"] = quantity;
      this.itemDetailsArr[this.itemFoundIndex]["PRICE"] = quantity * itemDetails["PRICE"]
    } else {
      console.log("Not found matching item");
      this.itemDetailsArr.push(itemDetails);
    }
    this.isItemFound = false;
  }



}

