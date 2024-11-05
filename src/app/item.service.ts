import { Injectable, OnInit } from '@angular/core';
import { Item } from './models/item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  searchValue = '';

  public filterState = {
    sortByDes: false,
    sortByTime: false,
    hideDone: false,
  };

  private apiUrl = '';

  private items: Item[] = [];
  public displayItems: Item[] = [];

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  updateFilterStates() {
    this.displayItems = this.filterData(this.searchValue);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/api/v1/TodoItems`);
  }

  updateItem(item: Item): Observable<Item> {
    const id = item.id;
    return this.http.put<Item>(
      `${this.apiUrl}/api/v1/TodoItems/id?id=${id}`,
      item
    );
  }

  createItem(data: Item): Observable<Item> {
    return this.http.post<Item>(`${this.apiUrl}/api/v1/TodoItems/`, data);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/v1/TodoItems/${id}`);
  }

  getItemById(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }

  setData(data: Item[]) {
    this.items = data;
    this.displayItems = this.filterData('');
  }

  filterData(searchValue: string): Item[] {
    let filteredData = this.items.slice(); // !!! sort will change items !!!
    if (searchValue.length !== 0) {
      filteredData = filteredData.filter((item) =>
        item.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (this.filterState.hideDone) {
      filteredData = filteredData.filter((item) => !item.done);
    }

    if (this.filterState.sortByDes) {
      filteredData = filteredData.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }

    if (this.filterState.sortByTime) {
      filteredData = filteredData.sort((a, b) => {
        const timeA = new Date(a.createdTime!).getTime();
        const timeB = new Date(b.createdTime!).getTime();
        return timeA - timeB;
      });
    }
    return filteredData;
  }
}
