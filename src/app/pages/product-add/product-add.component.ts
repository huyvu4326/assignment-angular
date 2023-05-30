import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductServices } from 'src/app/services/services.component';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  constructor(
    private ProductServices: ProductServices,
    private FormBuilder: FormBuilder){}
  productForm = this.FormBuilder.group({
    name: [''],
    price: [0]
  })
  onHandleSubmit(){
    if(this.productForm.valid){
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0
      }
      this.ProductServices.addProduct(product).subscribe(product => {
        console.log(product);
      })
    }
  }
}

