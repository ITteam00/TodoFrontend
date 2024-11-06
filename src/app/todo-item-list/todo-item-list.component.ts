import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrl: './todo-item-list.component.css',
})
export class TodoItemListComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  get todoItems() {
    return this.itemService.displayItems;
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        this.itemService.setData(data);
        console.log('get data!', data);
      },
      (error: HttpErrorResponse) => {
        console.log(error, error.error?.message, error.message);
      }
    );
  }
  onRemove(removeId: string) {
    this.itemService.deleteItem(removeId).subscribe(
      () => {
        this.itemService.getItems().subscribe(
          (data) => {
            this.itemService.setData(data);
            console.log('get data!', data);
          },
          (error: HttpErrorResponse) => {
            console.log(error, error.error?.message, error.message);
          }
        );
      },
      (error: HttpErrorResponse) => {
        console.log('Delete failed', error.error?.message, error.message);
      }
    );
  }

}
