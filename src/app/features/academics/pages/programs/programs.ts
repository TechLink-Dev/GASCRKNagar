import { Component } from '@angular/core';
import { Api } from '../../../../core/services/api';

@Component({
  selector: 'app-programs',
  imports: [],
  templateUrl: './programs.html',
  styleUrl: './programs.css',
})
export class Programs {
  courses: any[] = [];
  loading = true;
  error = '';

  constructor(private apiService: Api) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.apiService.getAllCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load courses';
        this.loading = false;
      }
    });
  }
}
