import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-di-product',
  templateUrl: './di-product.component.html',
  styleUrls: ['./di-product.component.css']
})
export class DiProductComponent implements OnInit {
  @Input() productName: string;

  constructor(private productsServerice : ProductsService) { }

  ngOnInit(): void {
  }

  onClicked(){
    this.productsServerice.deleteProduct(this.productName);
  }

}
