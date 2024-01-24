import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  posts = signal<Post[]>([]);

  searchService = inject(SearchService);

  search(): void {
    this.searchService.search().pipe().subscribe(res => {
      this.posts.set(res);
    })
  }
}
