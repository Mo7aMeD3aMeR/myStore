import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../models/product-model.model';
import { FormsModule } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from '../../models/cartItem.model';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() item:ProductModel=new ProductModel();
amount:number=1;
  constructor(private _cartservice:CartService) {


   }

  ngOnInit(): void {
  }
  addtoCart(){
const cartitem:cartItem={

  product:this.item,
  amount:this.amount

}
this._cartservice.addToCart(cartitem)
  }

}
