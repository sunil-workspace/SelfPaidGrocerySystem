import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemDetailsService } from '../services/item-details.service';

@Component({
  selector: 'app-lookup-item',
  templateUrl: './lookup-item.component.html',
  styleUrls: ['./lookup-item.component.css']
})
export class LookupItemComponent implements OnInit {
  @Input() itemSelectedVal: String;

  selectedItemRange: String = "Popular";
  @Output() goToLookupFinishPayButtonPage = new EventEmitter<any>();

  constructor(private itemDetailsService: ItemDetailsService) { }

  ngOnInit() {
  }

  itemSelected(selectedItem): void {
    console.log("Selected Item: ", selectedItem);
    this.itemDetailsService.getItemDetails(selectedItem).subscribe((itemDetails) => {
      console.log("Response came to itemSelected method. Item Details:: ", itemDetails);
      this.goToLookupFinishPayButtonPage.emit(itemDetails);
    });
    


    //console.log("itemSelectedVal: ", this.itemSelectedVal);

    //pass selectedItem item to backend and get the price.
    //pass selectedItem & item price to seleted item table

  }

  itemRangeSelected(selectedItemRange) {
    console.log("Selected Item Range: ", selectedItemRange);
    this.selectedItemRange = selectedItemRange;


  }

  /*displayLookupFinishPayButtonPageOnClickingItem(itemSelected) {
    this.goToLookupFinishPayButtonPage.emit()
  }*/

}
