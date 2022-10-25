import { Injectable } from '@angular/core';
import category from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  //state

  numberOfPages: number = 0;

  //functions
  async getProducts(skip: string) {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${skip}`
    );
    const products = await res.json();
    this.numberOfPages = products.total / 10;
    return products.products;
  }

  async getCategories() {
    let categories: category[] = [];
    const res = await fetch('https://dummyjson.com/products/categories');
    const categoriesNames = await res.json();
    for (let index = 0; index < categoriesNames.length; index++) {
      const res = await fetch(
        `https://dummyjson.com/products/category/${categoriesNames[index]}`
      );
      const size = await res.json();
      categories.push({ name: categoriesNames[index], total: size.total });
    }
    return categories;
  }
}
