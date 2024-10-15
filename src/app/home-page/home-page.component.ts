import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private itemService: ItemService) {}

  title = 'TodoList';
  data = this.itemService.displayItems;
  serchValue = '';

  onCreateItemClick(): void {
    this.router.navigate(['/create-item']);
    console.log('ccccccccccccccccccccccccccccc');
  }

  ngOnInit(): void {

    this.itemService.getItems().subscribe(
      (data) => {
        this.itemService.setData(data);
        this.data = this.itemService.displayItems;

        console.log('get data!', data);
      },
      (error: HttpErrorResponse) => {
        console.log('666');
        console.log(error, error.error?.message, error.message);
      }
    );
    
  }

  onSearchTextChange(searchText: string) {
    this.itemService.searchValue = searchText;
    this.itemService.updateFilterStates(); // 更新数据列表
    this.data = this.itemService.displayItems;
  }

  onSortByHideDoneClick() {
    this.itemService.filterState.hideDone =
      !this.itemService.filterState.hideDone;
    this.itemService.updateFilterStates();
    this.data = this.itemService.displayItems;
  }
  onSortByTimeClick() {
    this.itemService.filterState.sortByTime =
      !this.itemService.filterState.sortByTime;
    this.itemService.updateFilterStates(); // 更新数据列表
    this.data = this.itemService.displayItems;
  }
  onSortByDesClick() {
    this.itemService.filterState.sortByDes =
      !this.itemService.filterState.sortByDes;
    this.itemService.updateFilterStates(); // 更新数据列表
    this.data = this.itemService.displayItems;
  }
}
