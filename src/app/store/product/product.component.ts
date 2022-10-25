import { Component, Input, OnInit } from '@angular/core';
import product from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  @Input() product: product = {} as product;

  ngOnInit(): void {}
}
