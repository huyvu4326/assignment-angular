import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, error => {
      console.log(error.message)
    })
  }
  setValue(e: any) {
  }

  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      location.reload();
    })
  }
}
