import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product-model.model';
import { ProductsService } from '../../services/products.service';
import { cartItem } from '../../models/cartItem.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
item:ProductModel=new ProductModel()
qunt:number=1;
  constructor(private _productService:ProductsService,
    private route: ActivatedRoute,
    private _cartservice:CartService
  ) 
  { 
  }

  ngOnInit(): void {
    this.getModel();  
  }
  getModel(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item =this._productService.getbyID(id);
  }
  addtoCart()
  {
    console.log("clicked===>",this.item);
const cartitem:cartItem={
product:this.item,
amount:this.qunt

}
this._cartservice.addToCart(cartitem);

  }

}
