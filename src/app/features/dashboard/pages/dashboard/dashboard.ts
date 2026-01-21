import { Component } from '@angular/core';
import { Auth } from '../../../../core/services/auth';
import { Api } from '../../../../core/services/api';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  currentUser: any;
  userStats = {
    applicationStatus: 'pending',
    grievanceCount: 0,
    eventRegistrations: 0
  };
  recentNews: any[] = [];
  upcomingEvents: any[] = [];
  loading = true;

  constructor(
    private authService: Auth,
    private apiService: Api
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // Load recent news
    this.apiService.getAllNews().subscribe({
      next: (data) => this.recentNews = data.slice(0, 5)
    });

    // Load upcoming events
    this.apiService.getAllEvents().subscribe({
      next: (data) => {
        this.upcomingEvents = data.slice(0, 5);
        this.loading = false;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
