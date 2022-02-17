import {Component} from '@angular/core'

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {
    productName = 'A Book';

    constructor(){
        setTimeout(()=> this.productName = 'Tree', 300)
    }
}