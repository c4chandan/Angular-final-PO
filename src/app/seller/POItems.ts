export class POItems {
    productId:number;
    productName:string;
    productQuantity:number;

    constructor(pId:number,pName:string,pQ:number){
        this.productId=pId;
        this.productName=pName;
        this.productQuantity=pQ;
    }
}