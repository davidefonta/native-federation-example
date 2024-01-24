import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@demo/auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule
  ],
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
