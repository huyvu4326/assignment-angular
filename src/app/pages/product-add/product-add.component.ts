import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.FormBuilder.group({
    name: [""],
    price: [0]
   })
   constructor(
    private productService: ProductService,
    private FormBuilder: FormBuilder) {
   }
   onHandleSubmit(){
    console.log(this.productForm.value);
    
   }
}
