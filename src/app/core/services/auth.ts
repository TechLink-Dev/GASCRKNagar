import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Api } from './api';

interface User {
  id: string;
  email: string;
  firstName: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private apiService: Api) { }

  register(email: string, password: string, firstName: string, lastName: string): Observable<any> {
    return this.apiService.register({ email, password, firstName, lastName });
  }

  login(email: string, password: string): Observable<any> {
    return this.apiService.login(email, password).pipe(
      map(response => {
        if (response && response.token) {
          this.setToken(response.token);
          this.currentUserSubject.next(response.user);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        }
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getUserRole(): string {
    const user = this.getCurrentUser();
    return user?.role || '';
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  private getUserFromStorage(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}