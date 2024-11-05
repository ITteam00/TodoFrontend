import { Component, Input } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  constructor(private itemService: ItemService) {}

  onDeleteClick() {
      this.itemService.deleteItem(this.item.id);

  }
  @Input() item!: Item;
}
