import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Product1', 'this is a prod 1 descr', 100),
    new Product(2, 'Product2', 'this is a prod 2 descr', 150),
    new Product(3, 'Product3', 'this is a prod 3 descr', 30),
    new Product(4, 'Product4', 'this is a prod 4 descr', 1200),
    new Product(5, 'Product5', 'this is a prod 5 descr', 300),
    new Product(6, 'Product6', 'this is a prod 6 descr', 400)
  ]

  constructor() { }

  getProducts(): Product[] {
    // TODO: Populate products from an API and return an Observable
    return this.products;
  }
}
