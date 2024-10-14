import { Injectable, OnInit } from '@angular/core';
import { Item } from './models/item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService implements OnInit {
  private apiUrl = ''; 
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

  createItem(data: Item) {
    this.http
      .post<Item>(`${this.apiUrl}/api/v1/TodoItems/`, data)
      .subscribe((ok) => {
        console.log('111');
        console.log(ok);
      });
  }

  deleteItem(id: string): void {
    this.http
      .delete(`${this.apiUrl}/api/v1/TodoItems/${id}`)
      .subscribe((ok) => {
        console.log(ok);
      });
  }

  getItemById(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }
  setData(data: Item[]) {
    // getItems(): Item[] {
    this.items = data;
  }
}
