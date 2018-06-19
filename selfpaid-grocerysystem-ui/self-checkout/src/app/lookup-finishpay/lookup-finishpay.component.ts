import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lookup-finishpay',
  templateUrl: './lookup-finishpay.component.html',
  styleUrls: ['./lookup-finishpay.component.css']
})
export class LookupFinishpayComponent implements OnInit {

  @Output() onClickLookup= new EventEmitter<boolean>();
  @Output() onClickingFinishPay= new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  displaylookupItems(){
    this.onClickLookup.emit() 
  }

  displayPayOptions(){
   this.onClickingFinishPay.emit()
  }
}
