import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(TodoItemListComponent)
  todoItemListComponent!: TodoItemListComponent;
  onItemAdded() {
    console.log('on item added');
    const todoListComponent = document.querySelector('app-todo-item-list');
    if (this.todoItemListComponent) {
      this.todoItemListComponent.refreshItems();
    }
  }
}
