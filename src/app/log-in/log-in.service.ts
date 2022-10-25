import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogIngService {
  constructor(private router: Router) {}

  //state
  isLoggedIn: boolean = false;

  //functions
  async logIn(email: string, password: string) {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    const data = await res.json();
    if (data.hasOwnProperty('message')) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.router.navigate(['store']);
    }
  }
}
