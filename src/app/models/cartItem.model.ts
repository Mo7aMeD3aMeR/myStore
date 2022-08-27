import { ProductModel } from './product-model.model';

export class cartItem{

    product:ProductModel;
    amount:number;
    /**
     *
     */
    constructor() {
            this.product=new ProductModel();
            this.amount=0;
    }
}