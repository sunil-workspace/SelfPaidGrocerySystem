import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-table',
  templateUrl: './logo-table.component.html',
  styleUrls: ['./logo-table.component.css']
})
export class LogoTableComponent implements OnInit {

  @Input('itemDetailsArr') itemDetailsArr: any;
  itemsSelectedArr: any = [];
  

  constructor() {

  }

  ngOnInit() {
    console.log("Came here to ngOnInit ");
    this.itemsSelectedArr = this.itemDetailsArr;

    console.log("this.itemsSelectedArr: ", this.itemsSelectedArr);
  }

}
