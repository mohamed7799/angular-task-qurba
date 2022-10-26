import { Component, OnInit } from '@angular/core';
import { LogIngService } from '../log-in/log-in.service';
import { StoreService } from '../store/store.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private logIn: LogIngService, private store: StoreService) {}
  //state

  navCart: number = 0;

  //functions

  loggedIn() {
    return this.logIn.isLoggedIn;
  }

  ngOnInit(): void {
    this.store.cart.subscribe((data) => {
      this.navCart = data;
    });
  }
}
