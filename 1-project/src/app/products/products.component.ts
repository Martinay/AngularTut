import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  productName = 'A Book';
  isDisabled = false;
  products = ['A book', 'A Tree'];

  constructor(){
      setTimeout(()=> this.productName = 'Tree', 3000);
  }

  ngOnInit(): void {
  }

  onAddProduct(){
    this.products.push(this.productName)
  }

  onAddProductForm(form){
    console.log(form)
    if(form.valid){
      this.products.push(form.value.productNameGenerated)
    }
  }

  onRemoveProduct(product :string){
    this.products = this.products.filter(x => x !== product);
  }
}

