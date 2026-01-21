import { Component } from '@angular/core';
import { Auth } from '../../../../core/services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  loading = false;
  error = '';
  success = '';

  constructor(private authService: Auth, private router: Router) { }

  register() {
    if (!this.email || !this.password || !this.firstName) {
      this.error = 'Please fill all required fields';
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    this.authService.register(this.email, this.password, this.firstName, this.lastName)
      .subscribe({
        next: (response) => {
          this.loading = false;
          this.success = 'Registration successful! Please login.';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (error) => {
          this.loading = false;
          this.error = error.error?.message || 'Registration failed';
        }
      });
  }

}
