import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemDetailsService {

  constructor(public http:Http) { }

  getItemDetails(selectedItem){
    console.log("Came to ItemDetailsService: getItemDetails method, The item selected is:: ", selectedItem);
    return this.http.get('http://localhost:8080/getItemDetails/'+selectedItem).map(res => res.json());
    /*if(selectedItem == "apple"){
    return this.http.get('assets/jsons/itemDetails.json').map(res => res.json());
    } else if(selectedItem == "avocado"){
      return this.http.get('assets/jsons/itemDetails1.json').map(res => res.json());
    } else if(selectedItem == "apricot"){
      return this.http.get('assets/jsons/itemDetails2.json').map(res => res.json());
    }*/
  }

  postItemDetails(finalSelectedItemsArr){
    console.log("Came to ItemDetailsService: postItemDetails method, The Final Items List is:: ", finalSelectedItemsArr);
    return this.http.post('http://localhost:8080/postItemDetails/', finalSelectedItemsArr, "").map(res => res.json());
  }

}
