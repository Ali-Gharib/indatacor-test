import { Component } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable-page.component.html',
  styleUrls: ['./datatable-page.component.css']
})
export class DataTableComponent {
  products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];
  selectedProducts: any[] = [];

  productDialog: boolean = false; // Add this line to declare the property

  deleteProduct(product: any): void {
    // Supprimer la ligne correspondante du tableau
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  editProduct(product: any): void {
    // Implémenter la logique pour la modification du produit
  }
}
