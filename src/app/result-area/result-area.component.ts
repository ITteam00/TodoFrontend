import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrl: './result-area.component.css',
})
export class ResultAreaComponent {
  constructor(private router: Router, private itemService: ItemService) { }
  @Input() results:Item[] = [];


  onCheckboxChange(index: number, event: Event): void {
    this.results[index].done = (event.target as HTMLInputElement).checked;

    console.log(this.results[index]);
    this.itemService.updateItem(this.results[index]).subscribe(
      (data: Item) => {
        console.log('Item checked updated successfully:', data);
      },
      (error: HttpErrorResponse) => {
        console.log('Item checked updated  response error');
        console.log(error);
      }
    );
  }
  goToDetail(id: string) {
    this.router.navigate(['/item', id]);
  }
}
