export class ProductModel 
    {
        id:number;
        name:string;
        url:string;
        price:number;
        description:string;
        quantity:number;
        totalprice:number;
        /**
         *
         */
        constructor() {
            this.id = 0;
            this.name = "";
            this.url = "";
            this.price = 0;
            this.description = "";
            this.quantity=1;
            this.totalprice=this.price*this.quantity;
        }
        
    }

