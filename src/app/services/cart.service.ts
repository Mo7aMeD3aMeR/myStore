import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model.model';
import { cartItem } from '../models/cartItem.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartList:cartItem[]=[];
price:number=0;
cartlist$=new BehaviorSubject(this.cartList);

  constructor() { }
 getAll():cartItem[]{

  return this.cartList;
 }
 calcPrice():number{
return this.cartList.reduce( function(a, b){
  return a + b.product.price*b.amount;
}, 0);

 };
  addToCart(model:cartItem):void{
    var old:cartItem=this.cartList.filter(element => element.product.id==model.product.id)[0];
    if(old)
    {
      old.amount=Number(old.amount)+Number(model.amount);
      console.log(old);
    }
else{
    this.cartList.push(model);
}
alert("Added To Cart");

}
}
