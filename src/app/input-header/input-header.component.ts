import { Component, EventEmitter, Output } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-input-header',
  templateUrl: './input-header.component.html',
  styleUrl: './input-header.component.css',
})
export class InputHeaderComponent {
  userInput: string = '';

  constructor(private itemService: ItemService) {}

  addItem() {
    const result: Item = {
      id: '',
      description: this.userInput,
      done: false,
    };
    this.itemService.createItem(result).subscribe(
      (ok) => {
        this.userInput = '';
        this.itemService.getItems().subscribe(
          (data) => {
            this.itemService.setData(data);
            console.log('get data after added!', data);
          },
          (error: HttpErrorResponse) => {
            console.log(error, error.error?.message, error.message);
          }
        );
      },
      (error) => {
        console.error('Error creating item:', error);
      }
    );
  }
}
