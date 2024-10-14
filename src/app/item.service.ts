import { Injectable, OnInit } from '@angular/core';
import { Item } from './models/item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService implements OnInit {
  private apiUrl = ''; // todo
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  private items: Item[] = [];
  ngOnInit(): void {
    this.items = [
      { id: '1', description: 'fake 6666666666', done: false },
      { id: '2', description: 'fake aaaaaaaaaaaaaaaa', done: false },
      { id: '3', description: 'fake 8888888888888', done: true },
    ];
  }

  // getItems(): Item[] {
  //   return this.items;
  // }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/api/v1/TodoItems`);
  }

  getItemById(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }
  setData(data: Item[]) { // getItems(): Item[] {
    this.items = data;
  }
}
