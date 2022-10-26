import { Component, Input, OnInit } from '@angular/core';
import product from 'src/app/interfaces/product';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private store: StoreService) {}

  @Input() product: product = {} as product;

  ngOnInit(): void {}

  //functions

  add() {
    this.store.addToCart();
  }
}
