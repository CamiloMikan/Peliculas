import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';

  token = false;

  constructor(private router: Router) {}
  ngOnInit() {
    localStorage.setItem('token',JSON.stringify(this.token));
  }

  login() {

    if (this.email == 'cl' && this.password == 'co') {
      this.router.navigate(['/cartelera']);
      this.token = true;
      console.log(this.token)
      localStorage.setItem('token',JSON.stringify(this.token));
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
