import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input() item:cartItem;
@Output() _updateAmt:EventEmitter<any>=new EventEmitter;

  constructor() {
this.item=new cartItem() ;

   }

  ngOnInit(): void {
  }
  updatetotalPrice(){
    this._updateAmt.emit();
    
  }

}
