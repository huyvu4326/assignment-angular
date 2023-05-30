import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductServices } from 'src/app/services/services.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct
  productForm = this.FormBuilder.group({
    name: [''],
    price: [0]
  })
  constructor(
    private ProductServices: ProductServices,
    private FormBuilder: FormBuilder,
    private route: ActivatedRoute){
      this.route.paramMap.subscribe(param => {
        const id = Number(param.get('id'));
        this.ProductServices.getProductById(id).subscribe(product => {
          this.product = product;
          this.productForm.patchValue({
            name: product.name,
            price: product.price
          })
        }, error => console.log(error.message))
      })
    }
    onHandleUpdate(){
      if(this.productForm.valid){
        const newProduct: IProduct = {
          name: this.productForm.value.name || '',
          price: this.productForm.value.price || 0
        }
        this.ProductServices.updateProduct(newProduct).subscribe(product => {
          console.log(product);
        })
      }
    }
  }

