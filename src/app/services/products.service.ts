import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model.model';
import{HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
list :ProductModel[]=[];
list$=new BehaviorSubject(this.list);
// list$=new BehaviorSubject<ProductModel[]>()
  constructor(private _httpclient:HttpClient) { }

  getAll()
  {
     this._httpclient.get<ProductModel[]>("/assets/data.json").subscribe((data)=>{

this.list=data;
this.list$.next(this.list);

     });
  }
  addToCart(item:ProductModel):void{

    this.list.push(item);
    this.list$.next(this.list);
  }
  getbyID(id:number):ProductModel{

    return this.list.filter(a=>a.id==id)[0];

  }
}
