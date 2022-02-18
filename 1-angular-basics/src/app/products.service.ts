import { Subject } from "rxjs";

export class ProductsService{
    private products = ['A Book'];
    productsUpdated = new Subject();

    addProduct(productName:string){
        this.products.push(productName);
        this.productsUpdated.next(null);
    }

    getProducts(){
        return [...this.products];
    }
    deleteProduct(productName){
        this.products = this.products.filter(x => x !== productName);
        this.productsUpdated.next(null);
    }
}