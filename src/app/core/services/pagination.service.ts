import { Injectable } from "@angular/core";

export interface PaginationConfig {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  
  paginate(items: any[], pageNumber: number, pageSize: number): any[] {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  }

  getPaginationConfig(totalItems: number, pageSize: number, currentPage: number): PaginationConfig {
    return {
      currentPage,
      pageSize,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize)
    };
  }

  generatePageNumbers(totalPages: number, currentPage: number): number[] {
    const pages: number[] = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }
}
