import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Output() removeId = new EventEmitter();
  @Output() setDone = new EventEmitter();

  @Input() item!: Item;

  onDeleteClick() {
    this.removeId.emit(this.item.id);
  }

  toggleTodo() {
    this.setDone.emit(this.item.id);
  }
}
