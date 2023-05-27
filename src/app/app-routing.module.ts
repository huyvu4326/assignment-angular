import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      
      { path: "product/add", component: ProductAddComponent},
      { path: "product/:id/edit", component: ProductEditComponent}
    ]
  },
  { path: "product/:id", component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
