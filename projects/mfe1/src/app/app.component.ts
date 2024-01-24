import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '@demo/auth';
import { SearchService } from './search.service';
import { Post } from './post';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }


  auth = inject(AuthService);

  ngOnInit(): void {
    console.log('userName', this.auth.userName);
  }

}
