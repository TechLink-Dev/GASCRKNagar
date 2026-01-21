import { Component } from '@angular/core';
import { Api } from '../../../../core/services/api';
import { PaginationService } from '../../../../core/services/pagination.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pagination } from '../../../../shared/components/pagination/pagination';

@Component({
  selector: 'app-news-list',
  imports: [CommonModule,RouterLink,Pagination],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css',
})
export class NewsList {
  allNews: any[] = [];
  paginatedNews: any[] = [];
  currentPage = 1;
  pageSize = 6;
  totalPages = 1;
  pageNumbers: number[] = [];
  loading = true;
  error = '';

  constructor(
    private apiService: Api,
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.apiService.getAllNews().subscribe({
      next: (data) => {
        this.allNews = data;
        this.totalPages = this.paginationService.getPaginationConfig(
          this.allNews.length,
          this.pageSize,
          this.currentPage
        ).totalPages;
        this.updatePagination();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load news';
        this.loading = false;
      }
    });
  }

  updatePagination() {
    this.paginatedNews = this.paginationService.paginate(
      this.allNews,
      this.currentPage,
      this.pageSize
    );
    this.pageNumbers = this.paginationService.generatePageNumbers(
      this.totalPages,
      this.currentPage
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
    window.scrollTo(0, 0);
  }
}
