import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
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
