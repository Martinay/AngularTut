import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-di-products',
  templateUrl: './di-products.component.html',
  styleUrls: ['./di-products.component.css']
})
export class DiProductsComponent implements OnInit, OnDestroy {

  private productsSubscription: Subscription;;
  products = [];
  
  constructor(private productsService:ProductsService) { }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    })
  }

  onAddProductForm(form){
    console.log(form)
    if(form.valid){
      this.productsService.addProduct(form.value.productNameGenerated);
    }
  }
}
