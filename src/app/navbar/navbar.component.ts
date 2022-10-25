import { Component, OnInit } from '@angular/core';
import { LogIngService } from '../log-in/log-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private logIn: LogIngService) {}

  //functions

  loggedIn() {
    return this.logIn.isLoggedIn;
  }

  ngOnInit(): void {}
}
