import { Component } from '@angular/core';
import { Auth } from '../../../../core/services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  loading = false;
  error = '';

  constructor(private authService: Auth, private router: Router) { }

  login() {
    if (!this.email || !this.password) {
      this.error = 'Please fill all fields';
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.loading = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.loading = false;
        this.error = error.error?.message || 'Login failed';
      }
    });
  }
}
