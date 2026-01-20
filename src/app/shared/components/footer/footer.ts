import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Academics', route: '/academics/programs' },
    { label: 'Admissions', route: '/admissions/overview' },
    { label: 'Campus', route: '/campus/facilities' },
    { label: 'Contact', route: '/contact' }
  ];

  contactInfo = {
    phone: '+91-1234-567890',
    email: 'info@gascr.edu.in',
    address: 'Government College, City Name, State, Country'
  };

  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '📱' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' }
  ];

  ngOnInit() {
    console.log('Footer Component Initialized');
  }
}
