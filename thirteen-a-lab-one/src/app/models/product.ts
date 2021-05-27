export class Product {
    productid: number;
    name: string;
    title:string;
    price:number;
    imageUrl:string;


    
    constructor(productid:number,name:string,title:string,price:number,imageUrl:'assets/caoat-03.jpeg')
    {
        this.productid =productid;
        this.name=name;
        this.title=title;
        this.price=price;
        this.imageUrl=imageUrl;

    }

}
