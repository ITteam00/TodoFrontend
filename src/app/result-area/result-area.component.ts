import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrl: './result-area.component.css',
})
export class ResultAreaComponent {
  constructor(private router: Router) {}
  results: Item[] = [
    { Id: '1', Description: '666', Done: false },
    { Id: '2', Description: '777', Done: false },
    { Id: '3', Description: '8888888888888', Done: true },
  ];

  onCheckboxChange(index: number, event: Event): void {
    this.results[index].Done = (event.target as HTMLInputElement).checked;
    console.log(this.results[index]);
  }
  goToDetail(id: string) {
    this.router.navigate(['/item', id]);
  }
}
