import { Component } from '@angular/core';
import { Api } from '../../../../core/services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement {
  users: any[] = [];
  loading = true;
  error = '';
  filterRole = '';
  roles = ['admin', 'faculty', 'student', 'visitor'];

  constructor(private apiService: Api) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // Mock data - replace with actual API call
    this.users = [
      { id: '1', email: 'user1@example.com', firstName: 'John', role: 'student', isActive: true },
      { id: '2', email: 'user2@example.com', firstName: 'Jane', role: 'faculty', isActive: true },
      { id: '3', email: 'user3@example.com', firstName: 'Admin', role: 'admin', isActive: true }
    ];
    this.loading = false;
  }

  getFilteredUsers() {
    return this.filterRole 
      ? this.users.filter(u => u.role === this.filterRole)
      : this.users;
  }

  toggleUserStatus(user: any) {
    user.isActive = !user.isActive;
    // Call API to update
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(u => u.id !== userId);
      // Call API to delete
    }
  }

  exportUsers() {
    const csv = this.convertToCSV(this.users);
    this.downloadCSV(csv);
  }

  private convertToCSV(data: any[]): string {
    const headers = ['Email', 'Name', 'Role', 'Status'];
    const rows = data.map(u => [u.email, u.firstName, u.role, u.isActive ? 'Active' : 'Inactive']);
    
    return [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');
  }

  private downloadCSV(csv: string) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'users.csv';
    link.click();
  }
}
