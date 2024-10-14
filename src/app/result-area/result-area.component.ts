import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrl: './result-area.component.css',
})
export class ResultAreaComponent implements OnInit {
  constructor(private router: Router, private itemService: ItemService) { }
  results: Item[] = [];
  ngOnInit(): void { 
    this.results = this.itemService.getItems();
  }

  onCheckboxChange(index: number, event: Event): void {
    this.results[index].Done = (event.target as HTMLInputElement).checked;
    console.log(this.results[index]);
  }
  goToDetail(id: string) {
    this.router.navigate(['/item', id]);
  }
}
