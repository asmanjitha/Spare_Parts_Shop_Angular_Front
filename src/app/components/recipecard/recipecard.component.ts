import {Component, Input, OnInit} from '@angular/core';
import {LiteralArray} from "@angular/compiler";
import { SearchpageComponent } from '../searchpage/searchpage.component';


@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.css']
})
export class RecipecardComponent implements OnInit {

  @Input()Part:Object;
  @Input()User: Object;
  @Input()SearchPage: SearchpageComponent;

  // private user : any;
  private msg : string;

  constructor(
    
  ) { 
    
  }

  ngOnInit() {
    
  }

  addToCart(){
    
    if(!this.User){
      alert("Please login first");
    }else{
      // alert(this.User["name"])
      this.SearchPage.updateCart(this.Part["_id"]);
    }
  }



}
