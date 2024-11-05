import { Component, EventEmitter, Output } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-input-header',
  templateUrl: './input-header.component.html',
  styleUrl: './input-header.component.css',
})
export class InputHeaderComponent {
  userInput: string = '';
  @Output() itemAdded = new EventEmitter<void>();

  constructor(private itemService: ItemService) {}

  addItem() {
    const result: Item = {
      id: '',
      description: this.userInput,
      done: false,
    };
    this.itemService.createItem(result);
    this.userInput = '';
    this.itemAdded.emit();
  }
}
