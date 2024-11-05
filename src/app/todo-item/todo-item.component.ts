import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Output() removeId = new EventEmitter();

  onDeleteClick() {
    this.removeId.emit(this.item.id);
  }
  @Input() item!: Item;
}
