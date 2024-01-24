import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private http = inject(HttpClient);

  search() {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  constructor() { }
}
