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
    phone: ' 044-29512558',
    phone1: ' 044-29560406',
    email: 'principalgascrknagar@gmail.com',
    address: 'No.183 B Block, AA Scheme Road,Kamarajar Salai, R.K Nagar,Tondiarpet, Chennai,Tamil Nadu-600 081.'
  };

  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'assets/images/icons/fb.png' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'assets/images/icons/X.png' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'assets/images/icons/linkedin.png' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'assets/images/icons/insta.png' }
  ];

  ngOnInit() {
    console.log('Footer Component Initialized');
  }
}
