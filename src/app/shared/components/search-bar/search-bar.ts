import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule,FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Input() placeholder = 'Search...';
  @Output() search = new EventEmitter<string>();

  searchTerm = '';

  onSearch(term: string) {
    this.search.emit(term);
  }

  clearSearch() {
    this.searchTerm = '';
    this.search.emit('');
  }
}
