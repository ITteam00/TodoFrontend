import { Component } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrl: './search-area.component.css',
})
export class SearchAreaComponent {
  searchText: string = '';

  constructor() {}

  // onSearchInput(event: Event): void {
  //   this.searchText = (event.target as HTMLInputElement).value;
  //   console.log('Search Input:', this.searchText);
  // }

  onReloadClick(): void {
    console.log('Reload clicked: ' + this.searchText);

    this.searchText = '';
  }
}
