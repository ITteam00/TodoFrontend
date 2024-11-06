import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { TextGenerationService } from '../text-generation.service';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrl: './todo-item-list.component.css',
})
export class TodoItemListComponent implements OnInit {
  result: string = '123';

  constructor(
    private itemService: ItemService,
    private location: Location,
    private apiService: TextGenerationService
  ) {}

  get todoItems() {
    const filter = this.location.path().split('/')[1] || 'all';
    console.log('11111', filter);

    this.itemService.setItemsFilter(filter);
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

  onSetDone(setDoneId: string) {
    let item = this.itemService.displayItems.find((x) => x.id == setDoneId);
    item!.done = !item?.done;
    this.itemService.updateItem(item!).subscribe(
      (data: Item) => {
        console.log('Item updated successfully:', data);
        this.itemService.getItems().subscribe(
          (data) => {
            this.itemService.setData(data);
          },
          (error: HttpErrorResponse) => {
            console.log(error, error.error?.message, error.message);
          }
        );
      },
      (error: HttpErrorResponse) => {
        console.log('Item updated  response error');
        console.log(error);
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

  sendTodoItems() {
    const todoItemsString = this.todoItems.map((item) => item.description).join('\n');
    this.apiService.generateContent(todoItemsString).subscribe(
      (data) => {
        this.result = data;
      },
      (error) => {
        console.log('!!' + error);
      }
    );
  }
}
