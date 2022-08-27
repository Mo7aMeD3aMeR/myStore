import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from '../../models/product-model.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList:ProductModel[]=[];
  subscribtion:Subscription;
  constructor(private _productService:ProductsService) { 
    this.subscribtion=this._productService.list$.subscribe((data:ProductModel[])=>{this.productsList=data;})
this._productService.getAll();

  }

  ngOnInit(): void {
  }
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.subscribtion.unsubscribe();
}
}
