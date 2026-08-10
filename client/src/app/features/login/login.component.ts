import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../../shared/models/login.model.js';
@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router = inject(Router);
  handleSubmit(formValue: NgForm) {
    const loginCredentials: login = {
      email: formValue.value.email,
      password: formValue.value.password,
    };
    console.log(loginCredentials, ' i am passed');
    this.router.navigate(['/dashboard']);
  }
}
