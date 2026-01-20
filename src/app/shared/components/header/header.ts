import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = false;
  isDropdownOpenAcademic = false;
  isDropdownOpenAdmission = false;

  ngOnInit() {
    console.log('Header Component Initialized');
  }

  ngOnClick(){
  this.isDropdownOpenAcademic = false;
  this.isDropdownOpenAdmission = false;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdownAcademic() {
    this.isDropdownOpenAcademic = !this.isDropdownOpenAcademic;
    this.isDropdownOpenAdmission = false;
  }
  toggleDropdownAdmission() {
    this.isDropdownOpenAdmission = !this.isDropdownOpenAdmission;
    this.isDropdownOpenAcademic = false;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  closeDropdown() {
    this.isDropdownOpenAcademic = false;
    this.isDropdownOpenAdmission = false;
  }

}
