import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  host: { class: 'store' },
})
export class StoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
