import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Auth Endpoints
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password });
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/profile`);
  }

  // Courses Endpoints
  getAllCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses`);
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses/${id}`);
  }

  // Faculty Endpoints
  getAllFaculty(): Observable<any> {
    return this.http.get(`${this.apiUrl}/faculty`);
  }

  getFacultyById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/faculty/${id}`);
  }

  // News Endpoints
  getAllNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/news`);
  }

  getNewsById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/news/${id}`);
  }

  // Events Endpoints
  getAllEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events`);
  }

  getEventById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/${id}`);
  }

  // Admissions Endpoints
  submitApplication(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admissions`, data);
  }

  getApplicationStatus(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/admissions/${id}`);
  }

  // Grievance Endpoints
  submitGrievance(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/grievances`, data);
  }

  getGrievanceStatus(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/grievances/${id}`);
  }
}