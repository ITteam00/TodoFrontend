import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private router: Router, private itemService: ItemService) {}

  title = 'TodoList';
  data = this.itemService.displayItems;
  serchValue = '';
  
  onCreateItemClick(): void {
    this.router.navigate(['/create-item']);
    console.log('ccccccccccccccccccccccccccccc');
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
