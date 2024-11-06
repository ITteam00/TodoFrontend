import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  constructor(private itemService: ItemService, private location: Location) {}
  get todoItems() {
    return this.itemService.displayItems;
  } 

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        this.itemService.setData(data);
        console.log('get data footer!', data);
      },
      (error: HttpErrorResponse) => {
        console.log(error, error.error?.message, error.message);
      }
    );
  }

  get filter(): string {
    return this.location.path().split('/')[1] || 'all';
  }
}
