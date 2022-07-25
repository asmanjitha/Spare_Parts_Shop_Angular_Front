import { Component, OnInit, Input } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-checkoutcard',
  templateUrl: './checkoutcard.component.html',
  styleUrls: ['./checkoutcard.component.css']
})
export class CheckoutcardComponent implements OnInit {

  @Input()Part:Object;

  constructor() { }

  ngOnInit() {
    
  }

  deletePart(){
    CheckoutComponent.deletePart(this.Part['_id'])
  }

}
