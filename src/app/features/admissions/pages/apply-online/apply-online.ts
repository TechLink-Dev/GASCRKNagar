import { Component } from '@angular/core';
import { Api } from '../../../../core/services/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apply-online',
  imports: [CommonModule],
  templateUrl: './apply-online.html',
  styleUrl: './apply-online.css',
})
export class ApplyOnline {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    courseId: '',
    qualifications: '',
    percentage: ''
  };

  loading = false;
  error = '';
  success = '';
  courses: any[] = [];

  constructor(private apiService: Api, private router: Router) {
    this.loadCourses();
  }

  loadCourses() {
    this.apiService.getAllCourses().subscribe({
      next: (data) => this.courses = data
    });
  }

  submit() {
    this.loading = true;
    this.error = '';
    this.success = '';

    this.apiService.submitApplication(this.formData).subscribe({
      next: (response) => {
        this.loading = false;
        this.success = 'Application submitted successfully!';
        setTimeout(() => this.router.navigate(['/home']), 2000);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Failed to submit application';
      }
    });
  }
}
