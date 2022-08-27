import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model.model';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from '../../models/cartItem.model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


cartItems:cartItem[]=[];

fullName:string="";
Adress:string="";
CreditCardNo:string="";
Totalprice:number=0;
constructor(private _cartservice:CartService,private route:ActivatedRoute,private router:Router) { 

  this._cartservice.cartlist$.subscribe((data:cartItem[])=>{
    this.cartItems=data;
  
  });
  this.cartItems=this._cartservice.getAll();
}
  ngOnInit(): void {
    this.updatetotalPrice();
  }

  updatetotalPrice(){
    this.Totalprice=this.cartItems.reduce((a,b)=>{
return a+ b.product.price* b.amount;

    },0);
  }
  onSubmit(){
const confirm={
  name:this.fullName,
  price:this.Totalprice
} ;
this.router.navigate(['confirm',{name:this.fullName,price:this.Totalprice}]);
}
}
