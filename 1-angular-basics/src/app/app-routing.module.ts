import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiProductsComponent } from "./di-products/di-products.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
    { path: '', component: DiProductsComponent },
    { path: 'products', component: ProductsComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}