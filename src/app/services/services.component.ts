import { IProduct } from './../interfaces/product';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable ({
  providedIn: 'root'
})
export class ProductServices {
  constructor (private Http: HttpClient){}

  getProduct():Observable<IProduct[]>{
    return this.Http.get<IProduct[]>(`http://localhost:3000/products`)
  }
  getProductById(id: any):Observable<IProduct>{
    return this.Http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: IProduct):Observable<IProduct>{
    return this.Http.post<IProduct>(`http://localhost:3000/products`, product)
  }
  updateProduct(product: IProduct):Observable<IProduct>{
    return this.Http.patch<IProduct>(`http://localhost:3000/products/${product.id}`, product)
  }
  deleteProduct(id: any):Observable<IProduct>{
    return this.Http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }
}
