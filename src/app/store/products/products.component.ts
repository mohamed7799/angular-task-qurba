import { Component, OnInit } from '@angular/core';
import product from 'src/app/interfaces/product';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private store: StoreService) {}
  //state

  products: product[] = [];

  pages: number[] = [];

  currentPage = 1;

  //functions

  async nextPage() {
    if (this.currentPage !== 10) {
      this.products = await this.store.getProducts(`${this.currentPage * 10}`);
      this.currentPage++;
    }
  }

  async prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.products = await this.store.getProducts(
        `${(this.currentPage - 1) * 10}`
      );
    }
  }

  async ngOnInit() {
    this.products = await this.store.getProducts('0');

    for (let index = 0; index < this.store.numberOfPages; index++) {
      this.pages.push(1 + index);
    }
  }
}
