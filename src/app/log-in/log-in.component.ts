import { Component, OnInit } from '@angular/core';
import { LogIngService } from './log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  host: {
    class: 'log-in',
  },
})
export class LogInComponent implements OnInit {
  constructor(private logIn: LogIngService) {}
  //state
  email: string = '';
  password: string = '';

  //functions

  async handleSubmit(event: any) {
    event.preventDefault();
    this.logIn.logIn(this.email, this.password);
  }

  ngOnInit(): void {}
}
