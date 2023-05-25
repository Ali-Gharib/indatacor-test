import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() {
    // Initialisez ici vos données de produits
    const initialProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 }
    ];

    this.products.next(initialProducts);
  }

  getProducts(): Observable<Product[]> {
    return this.products.asObservable();
  }

  addProduct(product: Product): void {
    const currentProducts = this.products.value;
    product.id = this.generateProductId();
    this.products.next([...currentProducts, product]);
  }

  updateProduct(updatedProduct: Product): void {
    const currentProducts = this.products.value;
    const updatedProducts = currentProducts.map(product => {
      if (product.id === updatedProduct.id) {
        return { ...product, ...updatedProduct };
      }
      return product;
    });
    this.products.next(updatedProducts);
  }

  deleteProduct(productId: number): void {
    const currentProducts = this.products.value;
    const updatedProducts = currentProducts.filter(product => product.id !== productId);
    this.products.next(updatedProducts);
  }

  private generateProductId(): number {
    // Générez un nouvel ID de produit unique
    return Math.max(...this.products.value.map(product => product.id)) + 1;
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
}
