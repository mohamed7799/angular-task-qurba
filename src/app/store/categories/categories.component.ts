import { Component, OnInit } from '@angular/core';
import category from 'src/app/interfaces/category';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private store: StoreService) {}
  //state

  categories: category[] = [];

  async ngOnInit() {
    this.categories = await this.store.getCategories();
  }
}
