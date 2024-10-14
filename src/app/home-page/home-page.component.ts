import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private router: Router) {}

  title = 'TodoList';
  onCreateItemClick(): void {
    this.router.navigate(['/create-item']);
    console.log('ccccccccccccccccccccccccccccc');
  }
}
