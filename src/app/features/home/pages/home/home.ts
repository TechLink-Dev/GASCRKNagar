import { Component, ElementRef, ViewChild } from '@angular/core';
import { Api } from '../../../../core/services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  courses: any[] = [];
  news: any[] = [];
  events: any[] = [];
  loading = true;
  error = '';

  constructor(private apiService: Api) { }

  ngOnInit() {
    this.loadHomeData();
  }
  
  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLDivElement>;

  currentIndex = 0;
  totalSlides = 0;

  ngAfterViewInit(): void {
    this.totalSlides = this.slider.nativeElement.children.length;
  }

  updateSlider(): void {
    this.slider.nativeElement.style.transform =
      `translateX(-${this.currentIndex * 100}%)`;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateSlider();
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlider();
  }
  loadHomeData() {
    this.apiService.getAllCourses().subscribe({
      next: (data) => this.courses = data,
      error: (err) => this.error = 'Failed to load courses'
    });

    this.apiService.getAllNews().subscribe({
      next: (data) => this.news = data.slice(0, 3),
      error: (err) => console.log('Failed to load news')
    });

    this.apiService.getAllEvents().subscribe({
      next: (data) => {
        this.events = data.slice(0, 3);
        this.loading = false;
      },
      error: (err) => {
        console.log('Failed to load events');
        this.loading = false;
      }
    });
  }
}
