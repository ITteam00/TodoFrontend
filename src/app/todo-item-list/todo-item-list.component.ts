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
  todoItems = this.itemService.displayItems;

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        this.itemService.setData(data);
        this.todoItems = this.itemService.displayItems;
        console.log('get data!', data);
      },
      (error: HttpErrorResponse) => {
        console.log(error, error.error?.message, error.message);
      }
    );
  }
}