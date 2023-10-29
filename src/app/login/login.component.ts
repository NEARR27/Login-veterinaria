import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    console.log('Username:', this.username, 'Password:', this.password);
  }


}
