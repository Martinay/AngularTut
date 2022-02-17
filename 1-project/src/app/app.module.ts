import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products/products.component';
import { DiProductComponent } from './di-product/di-product.component';
import { DiProductsComponent } from './di-products/di-products.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    DiProductComponent,
    DiProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
