import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductServices } from 'src/app/services/services.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private ProductServices: ProductServices){
    this.ProductServices.getProduct().subscribe(data => {
      this.products = data
    }, error => {
      console.log(error.message);
    })
  }
  set value(e: any){

  }
  onHandleRemove(id: any){
    this.ProductServices.deleteProduct(id).subscribe(() => {
      location.reload()
    })
  }
}
