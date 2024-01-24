import { Component, OnInit, inject, signal } from '@angular/core';
import { HomeService } from '../home.service';
import { User } from '../user';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  users = signal<User[]>([]);
  homeService = inject(HomeService);

  constructor() { }

  ngOnInit() {
  }

  getUsers() {
    return this.homeService.getUsers().subscribe(data => {
      this.users.set(data);
    });
  }

}
